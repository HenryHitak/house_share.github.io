import {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import globalIP from '../services/globalIp';
import loginService from '../services/loginService';
import {FloatingLabel, Form} from 'react-bootstrap';
import style from '../style/mytemplate.module.css';
function Logout(props){   
    const passInput = useRef();
    const [logFlag,setLogin] = useState(false);
    const [Ip,setIp] = useState();
    const [err,setErr] = useState();
    const navigate = useNavigate();
    const login = (event) =>{
        event.preventDefault();
        
        const formData = new FormData(event.target);
        formData.append('gip',Ip);
        loginService.login(formData)
            .then(response=>{
                setLogin(true);
                props.loginFun(response.data);
                sessionStorage.setItem("sid",response.data.sid);
                setErr(null);
                navigate('/');
            })
            .catch(err=>{
                setErr(err.response.data);
            });
    }
    useEffect(()=>{
        globalIP.getIP().then(data=>{setIp(data)});
    },[]);
}
export default Logout;