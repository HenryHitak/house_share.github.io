import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";

// home page replacement
function Yourpost(){
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="app">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      {/* {<Table data={data} />} */}
    </div>
  );
  }

function Yourpost(props){
  const[postList,setPostlist] = useState([]);
  let sid = sessionStorage.getItem("sid");
  YourInfoSrv.loadInfo(sid)
    .then(response =>{
      // console.log(response.data);
      setPostlist(response.data);
      // console.log(postList);
    })
    .catch(err=>{console.log(err)});

  return(
    <>
    {postList === null? <article className="show-art"><h1>You haven't posted yet</h1></article> : 
      <article className="show-art">
        <h1 className="show-h1">post detail</h1>
        {postList.map((val,idx)=>{
          return(
              < Tables key={idx} post={val} />
          )
        })}
      </article>}
    </>
  )
}

export default Yourpost;