import ContactCard from "./ContactCard/ContactCard";
import { StyledTitle } from "./style";
const VisitUs = () => {
    return ( 
        <>
        <StyledTitle>Contact Us</StyledTitle>
        
        <div className="card-holder flex-class wrap" style={{width:"100%", flexWrap:"wrap" , margin:"100px 0"}}>
        <ContactCard heading="Timmings" line1="Monday - Saturday" line2="10 A.M. to 7 A.M."></ContactCard>
        <ContactCard heading="Address" line1="R-1, 2nd Floor, Parsvnath Plaza," line2="sector-27, Noida (U.P.-201301)"></ContactCard>
        <ContactCard heading="Contact" line1="(+91) 9311216558" line2="(+91) 9311216559"></ContactCard>
    </div>
    </>

     );
}
 
export default VisitUs;