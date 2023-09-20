import { StyledHero } from "./style";
import HeroSVG from "../../res/landing-page-header.svg";
const Home = () => {
    return ( <StyledHero>
            <div className="left">
                <h1>Get your best fit overseas education destination.</h1>
                <h2>Get admission in world's finest colleges and universites.</h2>
                <button onClick={()=>{
                    document.querySelector(".login-wraped").style.right="0";
                    document.querySelector(".input-container input").focus();
            
                }}>Get Started</button>
                <p>1500+ top colleges available</p>
            </div>
            <div className="right">
                <img src={HeroSVG} alt="" />
            </div>
        </StyledHero> );
}
 
export default Home;