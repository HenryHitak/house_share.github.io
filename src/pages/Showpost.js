import { Link } from "react-router-dom";
import HttpCommon from "../services/http-common";
import { useState } from 'react';

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
  HttpCommon.post('/showpost.php')
    .then(response =>{
      // console.log(response);
      setPostlist(response.data);
      //  console.log(postList[4]);
    })
    .catch(err=>{console.log(err)});

  const postDetail =(idx)=>{
    setPostlist(postList[idx]);
  }

  return(
    <>
      <article>
        {postList.map((val,idx)=>{
          < Tables key={idx} post={val} />
        })}
      </article>
    </>
  )
}

export default Showpost;