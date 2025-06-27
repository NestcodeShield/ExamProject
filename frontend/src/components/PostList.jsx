import { useState,useEffect } from "react";
import React from "react";
import './PostList.css'


function PostList() {

  const post = [
    {id:2313, url:'/images/portfolio-1.jpg', description:'Здесь должно быть описание',title:'Название поста',createdAt:'2023-05-01' },
    {id:2313, url:'/images/portfolio-1.jpg', description:'Здесь должно быть описание',title:'Название поста',createdAt:'2023-05-01' },
    {id:2313, url:'/images/portfolio-1.jpg', description:'Здесь должно быть описание',title:'Название поста',createdAt:'2023-05-01' },
    {id:2313, url:'/images/portfolio-1.jpg', description:'Здесь должно быть описание',title:'Название поста',createdAt:'2023-05-01' },
    {id:2313, url:'/images/portfolio-1.jpg', description:'Здесь должно быть описание',title:'Название поста',createdAt:'2023-05-01' },
  ]

  return (
    
    <div className="PostList">
     <div className="list-grid">
          {post.map((post) => (
            <div className="post-list-item">
              <img src={post.url} alt={post.index} />
              <span>{post.title}</span>
              <p>{post.description}</p>
              <small>{post.createdAt}</small>
            </div>
          ))}
        </div>
    </div>
  );
}

export default PostList;
