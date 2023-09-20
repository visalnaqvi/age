import Logo from "../../res/logo.png";
import { StyledNav } from "./style";
import { Link } from 'react-router-dom';
const Nav = () => {
    return ( <StyledNav>
        
            <img className="logo" src={Logo} alt="" />
            <div className="right">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
                <button onClick={()=>{
                    document.querySelector(".login-wraped").style.right="0";
                    document.querySelector(".input-container input").style.height = '20px';
                    document.querySelector(".input-container input").focus();
                    document.querySelector(".input-container p").style.fontSize = '12px';
            
                }}>Registration</button>
            </div>
        
    </StyledNav> );
}
 
export default Nav;