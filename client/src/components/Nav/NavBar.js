import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper">
          <Link to="/home" className="brand-logo left"><h4>InstaClone</h4></Link>
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/signin">SignIn</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/createpost">CreatePost</Link></li>
          </ul>
        </div>
      </nav>
    )
}


export default NavBar;