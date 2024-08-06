import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const basename = process.env.REACT_APP_BASENAME || '';
    console.log('Basename:', basename);
    

  return (
    <div className='nav-div'>
      <ul className="nav-u1">
        <li><Link to={`${basename}`}>Home</Link></li>
        <li><Link to={`${basename}/addproducts`}>Add products</Link></li>
        <li><Link to={`${basename}/Updateproduct`}>Update product</Link></li>
        <li><Link to={`${basename}/logout`}>Logout</Link></li>
        <li><Link to={`${basename}/profile`}>Profile</Link></li>
        <li><Link to={`${basename}/SignUp`}>Sign Up</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
