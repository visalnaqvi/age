import { StyledStepCard } from "./style";
const StepCard = ({num , img , heading , text}) => {
    return ( <StyledStepCard>
        <div className="num">
            <p>{num}</p>
        </div>
        <div className="right flex-class">
            <div className="content">
                <p className="heading">{ heading }</p>
                <p className="text">{ text }</p>
            </div>
            <img src={img} alt="" />
        </div>
    </StyledStepCard> );
}
 
export default StepCard;