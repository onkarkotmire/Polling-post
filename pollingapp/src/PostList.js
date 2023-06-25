import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const[page, setPage] = useState(0)
  const[counter, setCounter] = useState(0)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${posts.length / 20}`
        );
        const newPosts = response.data.hits;
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    const interval1 = setInterval(()=>{
        setCounter((prevTime)=>{
            return prevTime + 0.5;
        })
    },1000)
    
    

    const interval = setInterval(() => {
      fetchPosts();
      setPage((prevcount)=>{
       return  prevcount + 1
      })
      console.log(page)
    }, 10000); // Poll every 10 seconds

    return () => {
      clearInterval(interval);
    };
  },[]);

  return (
    <div style={{marginLeft:"30px"}}>
      <h1>Post List</h1>
      <h3 style={{color:"red"}}>Timer: {counter}</h3>
      <h3>Page Count: {page}</h3>
     {posts.length>0 && <table width="90%" frame="box" rules="all" >
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Created At</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.objectID}>
              <td>{post.title}</td>
              <td>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  {post.url}
                </a>
              </td>
              <td>{post.created_at}</td>
              <td>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
}
    </div>
  );
};

export default PostList;
