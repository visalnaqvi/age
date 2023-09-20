import StepCard from "../StepCard/StepCard";
import { StyledHowWeWork } from "./style";
import step1 from "../../res/icon/step1.png";
import step2 from "../../res/icon/step2.png";
import step3 from "../../res/icon/step3.png";
import step4 from "../../res/icon/step4.png";
const HowWeWork = () => {
    return (
    <StyledHowWeWork>
        <p className="title">How we work?</p>
        <p className="sub">4 Steps to Get Your Dream College</p>
        <StepCard num="1" img={step1} heading="Register with us" text="Explore college opportunities and schedule a meeting as per your convenience."></StepCard>
        <StepCard num="2" img={step2} heading="Get a counselor" text="Meet your counselor at a convinent time according to you and choose your favourite college and univertisy to study in."></StepCard>
        <StepCard num="3" img={step3} heading="Submit Documents" text="Submit your documents for verifcation of your application."></StepCard>
        <StepCard num="4" img={step4} heading="Get an offer letter" text="After your application is selected and documents are verified offer letter will be shared with you."></StepCard>
    </StyledHowWeWork>  );
}
 
export default HowWeWork;