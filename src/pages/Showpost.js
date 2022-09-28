import HttpCommon from "../services/http-common";
import { Link } from 'react-router-dom';
import react, { useState, useEffect } from "react";
import React, { Component } from 'react';
import YourInfoSrv from "../services/yourinfo";
import '../App.css';
import SingleImageUploadComponent from '../components/single-image-upload.component';
import MultipleImageUploadComponent from '../components/multiple-image-upload.component';

function Tables(props){
  const post = props.post; 
  const index = props.number;

  return(
      <aside className="show-aside">
        <figure className="show-fig">
          <img className="showimg" src={window.location.origin + `/img/post_img/${post.imgName}`}  alt={`${post.imgName}`}/>
        </figure>
        <div className="showcontent">
          <h1 className="show-h1">{post.title}</h1>
          <time className="showtime">{post.p_date}</time>
          <p className="showp">{post.postContent}</p>
        <form className="showform">
          <button className="showbutton" type="button" onClick={()=>props.postdetail(index)}>See Detail</button>
        </form>
        </div>
      </aside>
  )
}

  function Details(props){
    const post = props.post; 
    const [postuser, setPostUser] = useState({});
 
    useEffect(()=>{
      console.log(post['user_id']);
      YourInfoSrv.loadpostuser(post['user_id'])
      // HttpCommon.post('/showuser.php',post['user_id'])
      .then(response =>{
        console.log(response.data);
        setPostUser(response.data);
        // setPostlist(response.data);
      })
      .catch(err=>{console.log(err)})
      },[]);

  return(
    <>
      <aside className="show-aside">
        <figure className="show-fig">
          <img className="showimg" src ={window.location.origin + `/img/post_img/${post.imgName}`} alt='img'/>
        </figure>
        <div className="showcontent">
          <h1 className="show-h1">{post.title}</h1>
          <time className="showtime">{post.p_date}</time>
          <p className="showp">{post.postContent}</p>
        </div>
      </aside>
      <aside className="show-aside">
        <figure className="show-fig">
          <img className="showimg" src ={window.location.origin + `/img/profile_img/${postuser.profImg}`} alt={postuser.profImg}/>
        </figure>
        <div className="showcontent">
          <h2>{postuser.lastName}</h2>
          {postuser.atype === 'landlord' ? <h2>landlord</h2> : <h2>Student</h2> }
        </div>
      </aside>
    </>
  )
  }

function Showpost(props){
  const[postList,setPostlist] = useState([]);
  const [postdetail,setPostdetail] = useState({});
  const [flag, setFlag] = useState('false');
  useEffect(()=>{
    HttpCommon.get('/showpost.php')
    .then(response =>{
      setPostlist(response.data);
      setFlag('false');
      // console.log(response.data[0]);
    })
    .catch(err=>{console.log(err)});
    },[])
  
  const postDetail =(idx)=>{
    console.log(idx);
    setPostdetail(postList[idx]);
    console.log(postList[idx]);
    setFlag('true');
  }

  return(
    <>
      { flag === 'false' ? 
      <article className="show-art">
        {postList.map((val,idx)=>{
          return(
              < Tables key={idx} post={val} number={idx}  postdetail={ postDetail } />
          )
        })} 
      </article>
        :
      <article className="show-art"> 
        <Details post = {postdetail} /> 
      </article>
      }
    </>
  )
}

// function Showpost(){
//   const [postList,setPostlist] = useState([]);
//   const [post,setPost] = useState({});

//   const sid = sessionStorage.getItem("sid");
//   YourInfoSrv.loadInfo(sid)
//     .then(response =>{
//       // console.log(response.data);
//       setPostlist(response.data);
//     })
//     .catch(err=>{console.log(err)});

//   const postDetail =(idx)=>{
//     setPostlist(postList[idx]);
//   }
//     return (
//     <>
//       <div className="container">
//         {/* <div className="row">
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
//         </div> */}
//       </div>
//       <article>
//         {postList.map((val,idx)=>{
//           < Tables key={idx} post={val} postdetail = {postDetail}/>
//         })}
//       </article>
//     </>
//         );
// }
export default Showpost;