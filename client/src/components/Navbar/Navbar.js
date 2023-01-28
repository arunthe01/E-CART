import './Navbar.css'
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div className='nav'>
            <h1 className='company'> E-CART</h1>

            <div className='links'>
            <Link to="/" style={{ textDecoration: "none" }} className='link'>
               
                  Homepage
               
              </Link>

              <Link to="/AddPRODUCTS" style={{ textDecoration: "none" }} className='link'>
                
                  Add_Products
                
              </Link>
            </div>
        </div>
    )
}