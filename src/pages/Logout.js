import { useNavigate } from 'react-router-dom';
function Logout(props){   
    props.logoutFun('');
    const navigate = useNavigate('');
    sessionStorage.removeItem("sid");
    // navigate('/login');
}
export default Logout;