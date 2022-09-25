import HttpCommon from "../services/http-common";
import react, { useState} from "react";


function Tables(props){
  const post = props.post; 
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
        {/* <form className="showform">
          <button className="showbutton" type="submit" onClick={()=>props.postdetail(index)}> See Detail</button>
        </form> */}
        </div>
      </aside>

  )
}

function Showpost(){
  const[postList,setPostlist] = useState([]);
  HttpCommon.post('/yourPost.php')
    .then(response =>{
      console.log(response.data)
      setPostlist(response.data);
    })
    .catch(err=>{console.log(err)});

  return(
    <>
    {postList === null? <h1>You haven't posted yet</h1> : 
      <article className="show-art">
        <h1 className="show-h1">post detail</h1>
        {postList.map((val,idx)=>{
          return(
              < Tables key={idx} post={val}  />
          )
        })}
      </article>}
    </>
  )
}

export default Showpost;