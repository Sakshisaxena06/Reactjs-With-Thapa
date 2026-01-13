import {  useParams } from "react-router-dom"
import { FetchIndvPost } from "../../api/api"
 import { useQuery } from "@tanstack/react-query"
import { NavLink } from "react-router-dom"
export const FetchIndv=()=>{
    const {id } = useParams()
     const {data , isLoading , isError,error}= useQuery({
        queryKey:['posts',id],  // name of the query  which we want from api 
        queryFn: ()=> FetchIndvPost(id),  // where the api is get
      
     })
if(isLoading) return <p>Loading...</p>
if(isError) return <p>Error : {error.message || "something went wrong"}</p>
     
     return(
        <div className="section-accordion">
           <h1>Post no -  {id}</h1>
              <div>
               <p>ID : {data.id}</p>
                   <p>Title  : {data.title}</p>
                    <p>Body : {data.body}</p>
             
              </div>
               <NavLink to='/trad'>
                  <button>Go back </button>
               </NavLink>
        </div>
       
     )
}