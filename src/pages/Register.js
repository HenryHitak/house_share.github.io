import axios from "axios";
import { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const Register=()=>{
    // const {registerUser, wait} = useContext(UserContext);
    let history = useNavigate();
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        pass:""
    })
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            email:data.email,
            firstName:data.firstName,
            lastName:data.lastName,
            pass:data.pass
        }
        axios.post('http://localhost/finalproj/php/insert.php',sendData)
        .then((result)=>{
            if(result.data.Status == 'Invalid'){
            alert('Invalid User');
        }else{
            history('/');
        }
        })
    }
    return(
       <div>
            <h2>Sign Up</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="name">First Name:</label>
                <input type="text" name="firstName" placeholder="Your first name" id="firstName" onChange={handleChange} value={data.firstName} required />
                <label htmlFor="name">Last Name:</label>
                <input type="text" name="lastName" placeholder="Your last name" id="lastName" onChange={handleChange} value={data.lastName} required />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Your email" id="email" onChange={handleChange} value={data.email} required />
                <label htmlFor="password">Password:</label>
                <input type="password" name="pass"  placeholder="New password" id="pass" onChange={handleChange} value={data.pass} required />
                <button type="submit" name="submit" value="Register">Sign Up</button>
            </form>
        </div>
    )
}
export default Register;
