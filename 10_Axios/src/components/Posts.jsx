import React from 'react'
import { useEffect,useState } from 'react';
import { deltePost, getPost } from '../api/PostApi';
import "../App.css"
import {Form} from './Form';
const Posts = () => {
  const [data,setData] = useState([]) ;
  const [updateDataApi,setUpdateDataApi] =useState({})
    const getPostData=async()=>{
const res =  await getPost();
console.log(res.data);
setData(res.data);
}
  useEffect(()=>{
    getPostData();
  },[])
  // to delte post
  const handleDeletePost= async (id)=>{
    try {
        const res= await deltePost(id);
    if(res.status === 200){
      const newUpdatedPosts = data.filter((curPost)=>{
        return curPost.id !== id;
      })
      setData(newUpdatedPosts);
    }else{
      console.log("Failedto delete the post:",res.status);
      
    }
    } catch (error) {
      console.log(error);     
    }
  }
  // updatepost
  const handleUpdatePost =(curElem)=>{
     setUpdateDataApi(curElem) ;
  }

  return (
    <>

    <section className='section-form'>
      <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi}/>
    </section>
   <section className='section-post'>
<ol>
    {
data.map((curElem)=>{
    const {id,body,title} =curElem;
    return(
        <li key={id}>
            <p> Title : {title}</p>
            <p> SubTitle :{body}</p>
            <button onClick={()=>handleUpdatePost()}>Edit</button>
            <button className='btn-delete' onClick={()=>handleDeletePost(id)}>Delete</button>
        </li>
    )
})
    }
</ol>
   </section>
   </>
  )
}

export default Posts