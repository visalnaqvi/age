import { StyledService } from "./style";
const ServiceCard = ({styled , heading , text}) => {
    const style={
        backgroundColor:"#4f44e0",
        color:"#fff",
    }
    return ( <StyledService style={styled&&style}>
        <p className="heading">
            {heading}
        </p>
        <p className="text">
        {text}
        </p>
    </StyledService> );
}
 
export default ServiceCard;