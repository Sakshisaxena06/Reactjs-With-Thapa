import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

//get method

export const getPost=()=>{
    return api.get("/posts") ;
}
// delte method
export const deltePost=(id)=>{
    return api.delete(`/posts/${id}`)
}

// post method
export const postData =(post)=> {
    return api.post("/posts" ,post)
}
export const updateData = async (id, post) => {
  return axios.put(`/posts/${id}`, post);
};