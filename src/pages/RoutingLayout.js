import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faHouse } from "@fortawesome/free-solid-svg-icons";

function RoutingLayout(props){
  const loggedUser = props.loggedUser;
  return (
  <>
    <header className="navFooter-header">
        <div className="logo">
          <h1 className="whs">WHS<FontAwesomeIcon icon={faHouse} /></h1>
          <p className="ptagWhs">Wood Housing Solution</p>
      </div>
      { loggedUser =="" ? (
       <Link to="/login" className="loginOnNav">Login</Link>
      ) : (
      <nav className="loggedInNav">
      
        <ul>
          <li>
            <Link className="yourPostOnNav" to="/yourpost">Yourpost</Link>
          </li>
          <li>
            <Link className="findPostOnNav" to="/findpost">Find Share house</Link>
          </li>
          <li>
            <Link className="profileOnNav" to="/profile">Your profile</Link>
          </li>
          <li>
            <Link className="showpostOnNav" to="/showpost">Posts</Link>
          </li>
        </ul>
        <Link className="LogoutOnNav" to="/logout">Logout</Link>
      </nav>      
      )}
      {/* <div className="setting-wrap">
        <ul className="setting">
          <li className="setting-icon">
            <i className="fa-solid fa-gear"></i>
            <ul className="subMenu">
              <li>
                <Link to ="/">Dash Board</Link>
              </li>
              <li>
                <Link to ="/logout">Log out</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div> */}
    </header>
      <Outlet/>

    <footer>&copy; Wood housing solution</footer>
  </>
  )
}

export default RoutingLayout;