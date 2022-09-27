import { BrowserRouter, Routes, Route} from "react-router-dom";
import RoutingLayout from "./pages/RoutingLayout";
import Yourpost from "./pages/Yourpost";
import Showpost from "./pages/Showpost";
import Findpost from "./pages/Findpost";
import Login from "./pages/Login";
import Nopage from "./pages/Nopage";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile"
import { useEffect, useState } from 'react';
import $, { data } from 'jquery';
import Fileupload from './pages/Fileupload';
import userInfoSrv from './services/userInfoSrv';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import axios from "axios";
import Table from "./pages/Table";
export default function MainApp(){
    const [user,setUser] = useState('');
    //change
    const loginFunction = (userInput) =>{
        setUser(userInput);
        console.log(user);
    };

    const logoutFunction = () =>{
      setUser('');
  }
  // const [query, setQuery] = useState("");
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(`http://localhost:3000?q=${query}`);
  //     setData(res.data);
  //   };
  //   if (query.length === 0 || query.length > 2) fetchData();
  // }, [query]);

  // return (
  //   <div className="app">
  //       <input
  //         className="search"
  //         placeholder="Search..."
  //         onChange={(e) => setQuery(e.target.value.toLowerCase())}
  //       />
  //     {<Table data={data} />}
  //   </div>
  // );

    const pageLoad = ()=>{
        let sid = sessionStorage.getItem("sid");
        // console.log(sid);
        if(sid!=null){
            userInfoSrv.loadInfo(sid)
                .then(response=>{
                    setUser(response.data);
                    // console.log(user);
                })
                .catch(err=>{console.log(err)});
      }
    };
    useEffect(()=>{pageLoad()},[user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutingLayout loggedUser={user}/>}>
        <Route path="/signup" element={<Register/>} />
        {/* homepage replacement*/}
          <Route  index  element = { <Login loginFun={loginFunction}/>}/>
          <Route path="yourpost" element={<Yourpost loggedUser={user}/>}/>
          <Route path="logout" element = {<Logout loggedUser={user} logoutFun={logoutFunction}/>}/>
          <Route path="profile" element = { <Profile loggedUser={user} />}/>
          <Route path="register" element = {<Register loggedUser={user}/>}/>
          <Route path="showpost" element = {<Showpost loggedUser={user}/>}/>
          <Route path="findpost" element = {<Findpost loggedUser={user}/>}/>
          <Route path="*" element = { <Nopage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
