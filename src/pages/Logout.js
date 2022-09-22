import { useNavigate } from 'react-router-dom';
function Logout(props){
    props.LogoutFun('');
    const navigate = useNavigate();
    sessionStorage.removeItem("sid");
    navigate('/login');
}
export default Logout;