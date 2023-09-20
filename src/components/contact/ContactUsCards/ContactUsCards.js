import { StyledContactUsCard } from "./style";

const ContactUsCard = ({styleds,heading,text,l1,l2,phone}) => {
    const style =  {transform:"translateY(0px)"}
    const style2 =  {paddingBottom:"90px"}
    return ( 
        <StyledContactUsCard style={styleds ? style : style2}>
            <div className="heading">{heading}</div>
            <div className="text">{ text }</div>
            {l1&&<div className="wrapper">
                <div className="wrap flex-class">
                    <img src={phone} alt="" /><p>{l1}</p>
                </div>
                <div className="wrap flex-class">
                    <img src={phone} alt="" /><p>{l2}</p>
                </div>
            </div>}
        </StyledContactUsCard>
     );
}
 
export default ContactUsCard;