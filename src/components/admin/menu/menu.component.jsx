import React from 'react'
import './menu.component.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
         <label>
        <Link to="/" className="menu-item">
          ADMIN PANNEL
        </Link>
      </label>
      <label>
        <Link to="/" className="menu-item">
          HOME
        </Link>
      </label>

      <label>
        <Link to="/property-type" className="menu-item">
         PROPERTY TYPE
        </Link>
      </label>

      <label>
        <Link to="/property" className="menu-item">
       PROPERTY
        </Link>
      </label>
      
    </div>
  )
}

export default Menu
