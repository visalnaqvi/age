import { StyledFooter } from "./style";
import logo from "../../res/logo.png"
import facebook from "../../res/icon/facebook.svg"
import insta from "../../res/icon/instagram.svg"
import youtube from "../../res/icon/youtube.svg"
import linkedin from "../../res/icon/linkedin.svg"
const Footer = () => {
    return ( 
        <StyledFooter>
            <div className="top flex-class">
                <img className="logo" src={logo} alt="" />
                <div className="icons flex-class">
                    <a target="_blank" href="https://www.facebook.com/Aliyaglobaleducation/"><img src={facebook} alt="" /></a>
                    <a target="_blank" href="https://www.linkedin.com/company/aliya-global-education-age"><img src={linkedin} alt="" /></a>
                    <a target="_blank" href="https://www.instagram.com/age_edu/ "><img src={insta} alt="" /></a>
                    <a target="_blank" href="https://youtube.com/channel/UCO3GNcwZmY4K3HdRGOJHKTw"><img src={youtube} alt="" /></a>
                </div>
            </div>
            <div className="divide"></div>
            <div className="top flex-class">
                <p className="left">&#169; 2021 AGE Global Education</p>
                <p className="left">Email:aliyaglobaleducation@gmail.com</p>
            </div>
        </StyledFooter>
     );
}
 
export default Footer;