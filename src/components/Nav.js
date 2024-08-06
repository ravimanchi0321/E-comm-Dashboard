import React from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
    return(
        <div className='nav-div'> 
            <u1 className="nav-u1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addproducts">Add products</Link></li>
                <li><Link to="/updateproduct">Update product</Link></li>
                <li><Link to="/logout">logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/SignUp">Sign Up</Link></li>
            </u1>
        </div>
    )
}

export default Nav;