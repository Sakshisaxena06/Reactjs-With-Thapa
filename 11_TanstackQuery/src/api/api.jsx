import axios from "axios";

const api = axios.create({
baseURL: "https://jsonplaceholder.typicode.com",
})
 
// to fetch data 
export const fetchPosts = async(pageNumber)=>{
     try {
        const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`) ;
    return res.status === 200 ? res.data : [] 
     } catch (error) {
      console.log(error);
        
     }
}
export const FetchIndvPost = async(id) =>{
   try {
      const res=  await api.get(`/posts/${id}`);
     return res.status === 200 ? res.data :[] ;
   } catch (error) {
     console.log(error);
     
   }
}

export const deletePost =()=>{
   return api.delete(`posts/${id}`)
}

export const fetchUsers = async({pageParam = 1}) =>{
   try {
      const res =await  axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`)
      return res.data
   } catch (error) {
      console.log(error);
      
   }
}