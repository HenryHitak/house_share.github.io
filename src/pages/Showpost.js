import HttpCommon from "../services/http-common";
import { Link } from 'react-router-dom';
import {useEffect, useState, useRef} from 'react';
import React, { Component } from 'react';
import '../App.css';
import SingleImageUploadComponent from '../components/single-image-upload.component';
import MultipleImageUploadComponent from '../components/multiple-image-upload.component';

function Tables(props){
  const post = props.post; 
  const index = props.number;
  return(
      <aside>
        <figure>
          <img src ='#' alt='img'/>
          {/* <img src ='../img/post_img/'{post.imgName}''/> */}
        </figure>
        <div>
          <h1>{post.title}</h1>
          <time>{post.p_date}</time>
          <p>{post.postContent}</p>
        </div>
        <form >
          <button type="submit" onClick={()=>props.postdetail(index)}>Detail</button>
        </form>
      </aside>

  )
}

function Showpost(){
  const[postList,setPostlist] = useState([]);
  useEffect(()=>{
        fetch('http://localhost/php/showpost.php')
        .then((response)=>response.json())
        .then((data)=> setPostlist(data));
    },[postList]);
  HttpCommon.post('/fileupload.php')
    .then(response =>{
      // console.log(response);
      setPostlist(response.data);
    })
    .catch(err=>{console.log(err)});

  const postDetail =(idx)=>{
    setPostlist(postList[idx]);
  }
    return (
    <>
    <div>
      <input type="text" placeholder="Search" className="search"></input>
      {/* <button type="button" className="search" onClick={(event)=>Tables(event)>Click to Search</button> */}
      <ul className="list">
        {}
      </ul>
    </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Multiple Image Upload Preview
              </div>
              <div className="card-body">
                <MultipleImageUploadComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <article>
        {postList.map((val,idx)=>{
          < Tables key={idx} post={val} postdetail = {postDetail}/>
        })}
      </article> */}
    </>
        );
}
export default Showpost;