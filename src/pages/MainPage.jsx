import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import logo from "../assets/images/Brixi_logo_green1.png";
import "./MainPage.css";
import useDebounce from "../hooks/useDebounce";
import { getQuerryPosts } from "../services/posts_service";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

const MainPage = () => {
  //This are our states
  const [posts, setPosts] = useState([]);
  const [queryStr, setQueryStr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // This is our debouce hook (so we don't querry the server on every keypress)
  const debouncedQuerryStr = useDebounce(queryStr, 1000);

  useEffect(() => {
    if (debouncedQuerryStr) {
      setIsLoading(true);
      getQuerryPosts(debouncedQuerryStr)
        .then((resposne) => {
          setPosts(resposne.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.warn(err);
        });
    } else {
      setPosts([]);
    }
  }, [debouncedQuerryStr]);

  const handleSearch = (e) => {
    setQueryStr(e);
  };

  return (
    <div className="input-wrapper">
      <img src={logo} alt="logo" className="brixi-logo" />
      <SearchInput handleSearch={handleSearch} queryStr={queryStr} />
      <Posts
        posts={posts}
        queryStr={debouncedQuerryStr}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
};

export default MainPage;
