import { StyledContactCard } from "./style";

const ContactCard = ({heading, line1 , line2}) => {
    return (
        <StyledContactCard style={{
            width: '30%',
            minWidth: '330px',
        }}>    
            <div className="card">
                <p className="heading">{heading}</p>
                <p className="text">{ line1 }</p>
                <p className="text">{line2}</p>
            </div>
        </StyledContactCard>

     );
}
 
export default ContactCard;