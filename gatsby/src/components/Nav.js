import React from 'react';
import { Link, navigate } from 'gatsby';

/* function goToSlicemasters() {
    //1. Wait for 2 seconds
    setTimeout(()=> {
        console.log('Go to slicers!!!!');
        navigate('/slicemasters', {replace: true});
    }, 2000)

    //2. Chnage to page
} */

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas/">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/slicemasters/">Slicemasters</Link>
        </li>
        <li>
          <Link to="/orders/">Order Ahead!</Link>
        </li>
      </ul>
    </nav>
  );
}
