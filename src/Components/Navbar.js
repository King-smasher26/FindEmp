import React from 'react'
import "../Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  
  return (
    <div>
        <nav>
      <input type="checkbox" id="check" name="" value=""/>
      <label for="check" id="checkbtn"><i class="fa fa-bars"></i></label>
      <label class="logo"><Link id='linktohome'to="/">FindEMP</Link></label>
      <label for="check" class="checkbtn"></label>
      <ul>

        <li><Link to="/viewdata">Find Candidate</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
       </nav>
    </div>
  )
}
