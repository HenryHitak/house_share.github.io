import {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import globalIP from '../services/GlobalIp.js';
import loginService from '../services/loginService';
import {FloatingLabel, Form} from 'react-bootstrap';
import style from '../style/mytemplate.module.css';
function Logout(props){   
    props.LogoutFun('');
    const navigate = useNavigate();
    sessionStorage.removeItem("sid")
    navigate('/login');
}
export default Logout;