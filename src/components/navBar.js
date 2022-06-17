import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


function NavBar(){
  return(
    <div className="nav">
    <Link to="/" className="homeLink"><FontAwesomeIcon icon={faHouse} size="2x"/></Link>
    </div>
  )
}

export default NavBar;
