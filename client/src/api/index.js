import axios from "axios";

export const fetchPosts=() => axios.get("http://localhost:5000/get_film");

export const CrreatePosts=(newPost)=> axios.post("http://localhost:5000/post_film",newPost);

export const DeletePosts=(id)=> axios.delete(`http://localhost:5000/id/${id}`);
export const UpdatePosts=(id,updatePost)=> axios.patch(`http://localhost:5000/id/${id}`,updatePost);