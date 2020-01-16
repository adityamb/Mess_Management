import React from 'react'
import {Link} from 'react-router-dom'

import SignedinLinks from './SignedinLinks'
// import SignedOutLinks from './SignedOutLinks'
import './navbar.css'
const Navbar = () => {
    return(
  
        <nav className="nav-wrapper grey darken-3 Mynav" >
        
            <div className="InNav">
                 <Link to=" /" className="brand-logo " >Mess</Link>
            </div>
            <SignedinLinks />
           
            
      </nav>
     
    )
}
export default Navbar

