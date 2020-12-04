import Axios from "axios";

// our base url for posts
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// get all posts from server - might come handy sometime
const getAllPosts = async () => {
  return await Axios.get(`${BASE_URL}`);
};

//get querry posts from server
const getQuerryPosts = async (queryStr) => {
  return await Axios.get(`${BASE_URL}`, { params: { q: queryStr } });
};

//get post comments
const getPostComments = async (id) => {
  return await Axios.get(`${BASE_URL}/${id}/comments`);
};

export { getAllPosts, getQuerryPosts, getPostComments };
