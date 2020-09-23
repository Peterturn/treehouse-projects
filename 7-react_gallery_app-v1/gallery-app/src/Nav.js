import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to="/cats" activeStyle={{ background: 'skyblue'}}>Cats</NavLink></li>
          <li><NavLink to='/dogs' activeStyle={{ background: 'skyblue'}}>Dogs</NavLink></li>
          <li><NavLink to='/computers' activeStyle={{ background: 'skyblue'}}>Computers</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav;