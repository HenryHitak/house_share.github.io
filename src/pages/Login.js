import {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import globalIP from '../services/globalIp';
import loginService from '../services/loginService';
import {FloatingLabel, Form} from 'react-bootstrap';
import style from '../style/mytemplate.module.css';
import axios from 'axios';
function Login(props){    
    const passInput = useRef();
    const [logFlag,setLogin] = useState(false);
    const [Ip,setIp] = useState();
    const [err,setErr] = useState();
    const navigate = useNavigate();
    const login = (event) =>{
        event.preventDefault();
        
        const formData = new FormData(event.target);
        console.log(Ip);
        formData.append('gip',Ip);
        loginService.login(formData)
            .then(response=>{
                setLogin(true);
                props.loginFun(response.data);
                console.log(response.data)
                sessionStorage.setItem("sid",response.data.sid);
                setErr(null);
                navigate('/yourpost');
            })
            .catch(err=>{
                setErr(err.response.data);
            });
    }

    useEffect(()=>{
        globalIP.getIP().then(data=>{setIp(data)});
    },[]);

    const inputFocus = (event)=>{
        if(event.target.innerText == "Show Password"){
            passInput.current.type = "text";
            event.target.innerText = "Hide Password";
        }else{
            passInput.current.type = "password";
            event.target.innerText = "Show Password";
        }
    }
    const bgChanger = (event) =>{
        switch(event.type){
            case "focus":
                event.target.style.backgroundColor = "yellow";
                break;
            case "blur":
                if(event.target.value==""){
                    event.target.style.backgroundColor = "red";    
                }else{
                    event.target.style.backgroundColor = "white";
                }
                break;
        }
    }
    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={(event)=>login(event)}>
                <FloatingLabel controlId='userLabel' label="Write your username" className='mb-3'>
                <Form.Control type="email" name="uName" onFocus={(event)=>bgChanger(event)}  onBlur={(event)=>bgChanger(event)} placeholder="Write username" required/>
                <input type="password" name="pass" ref={passInput} placeholder="Write password" onFocus={(event)=>bgChanger(event)}  onBlur={(event)=>bgChanger(event)} required/>
                </FloatingLabel>
                <button type='button' onClick={(event)=>inputFocus(event)}>Show Password</button>
                <button className={style.mybtn} type="submit">Login</button>
            </form>
            {err!==null ? <h1>{err}</h1> : null}
        </>

    )
}
export default Login;