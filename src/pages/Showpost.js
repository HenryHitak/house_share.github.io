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
      <aside className="show-aside">
        <figure className="show-fig">
          <img className="showimg" src ='#' alt='img'/>
          {/* <img src ='../img/post_img/'{post.imgName}''/> */}
        </figure>
        <div className="showcontent">
          <h1 className="show-h1">{post.title}</h1>
          <time className="showtime">{post.p_date}</time>
          <p className="showp">{post.postContent}</p>
        <form className="showform">
          <button className="showbutton" type="submit" onClick={()=>props.postdetail(index)}> See Detail</button>
        </form>
        </div>
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
      // console.log(response.data[0]);
      // console.log(postList[4]);
    })
    .catch(err=>{console.log(err)});

  const postDetail =(idx)=>{
    setPostlist(postList[idx]);
  }

  return(
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
          return(
              < Tables key={idx} post={val} postdetail={()=>postDetail()} />
          )
        })}
      </article>
    </>
  )
}




// function Showpost(){
//   const[postList,setPostlist] = useState([]);
//   HttpCommon.post('/fileupload.php')
//     .then(response =>{
//       console.log(response);
//       setPostlist(response.data);
//     })
//     .catch(err=>{console.log(err)});

//   const postDetail =(idx)=>{
//     setPostlist(postList[idx]);
//   }
//     return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card">
//               <div className="card-header">
//                 Multiple Image Upload Preview
//               </div>
//               <div className="card-body">
//                 <MultipleImageUploadComponent />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <article>
//         {postList.map((val,idx)=>{
//           < Tables key={idx} post={val} postdetail = {postDetail}/>
//         })}
//       </article> */}  
</>
 );
}
export default Showpost;