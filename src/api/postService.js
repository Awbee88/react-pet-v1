import axios from "axios";

export async function getPosts(limit = 10, page = 1) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    return res;
}

export async function getPostById(id) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res;
}