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
            <Link className="yourPostOnNav" to="/yourpost">Your post</Link>
          </li>
          <li>
            <Link className="findPostOnNav" to="/showpost">Find Share house</Link>
          </li>
          <li>
            <Link className="profileOnNav" to="/profile">Your profile</Link>
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


import { Link, Outlet } from "react-router-dom";

function RoutingLayout(props){
  const loggedUser = props.loggedUser;
  return (
  <>
    <header className="navFooter-header">
        <div className="logo">
          <h1>WHS<i className="fa-solid fa-house"></i></h1>
          <p>Wood Housing Solution</p>
      </div>
      <nav className="navFooter-nav">
      <ul className="navMenu">
      { loggedUser =="" ? (
        <>        
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Signup</Link></li>
        </>
      ) : (
        <>
        <li><Link to="/logout">Logout</Link></li> 
          <li>
            <Link to="/yourpost">Yourpost</Link>
          </li>
          <li>
            <Link to="/showpost">Find Share house</Link>
            {/* showpost == findpost */}
          </li>
          <li>
            <Link to="/profile">Your profile</Link>
          </li>
          </>)}
        </ul>
      </nav>      
    </header>
      <Outlet/>

    <footer>&copy; Wood housing solution</footer>
  </>
  )
}

export default RoutingLayout;