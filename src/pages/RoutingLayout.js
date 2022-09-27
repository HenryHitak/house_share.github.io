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