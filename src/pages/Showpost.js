import { Link } from "react-router-dom";
import HttpCommon from "../services/Http-common";
import { useState } from 'react';

function Tables(props){
  const post = props.post; 
  return(
    <aside>
        <figure>
          <img src ='#'/>
          {/* <img src ='../img/post_img/'{post.imgName}''/> */}
        </figure>
        <div>
          <h1>{post.title}</h1>
          <time>{post.p_date}</time>
          <p>{post.postContent}</p>
        </div>
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