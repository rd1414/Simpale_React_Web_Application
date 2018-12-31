import React from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () => {
return(
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">

<a className="navbar-brand" href="/">React App</a>



<ul className="navbar-nav">
    <li className="nav-item">
    <Link to="/" className="nav-link">Home</Link> 
    </li>
    <li className="nav-item">
    <Link to="content" className="nav-link">Content</Link> 
    </li>
    <li className="nav-item">
    <Link to="about" className="nav-link">About Me</Link> 
    </li>
    <li className="nav-item">
    <Link to="contact" className="nav-link">Contact</Link> 
    </li>
</ul>


</nav>

);
};

export default Header;