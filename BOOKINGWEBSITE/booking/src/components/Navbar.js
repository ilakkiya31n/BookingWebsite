import { Link } from 'react-router-dom'
import  "./Navbar.css";
const Navbar = () =>{
    return(
        <div className="navbar-container">
            <ul className="con">
                <li><Link className='hom' to='/'>Login</Link></li>
                <li><Link className='log' to='/log'>Register</Link></li>    
                </ul>
        </div>
    )
}
export default Navbar