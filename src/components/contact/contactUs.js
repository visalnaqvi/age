import ContactUsCard from "./ContactUsCards/ContactUsCards";
import { StyledContactUs } from "./style";
import phone from "../../res/icon/phone.svg";
import Map from "../map";
const ContactUs = () => {
    return ( 
        <StyledContactUs>
            <p className="title">Contact Us</p>
            <p className="sub">Have any questions? We'd love to hear from you.</p>
            <div className=" wrapper flex-class">
                <ContactUsCard heading="Visit Us" text="We would love to have to at your office.You can visit us on address:R-1, 2nd Floor, Parsvnath Plaza,Sector-27, Noida (U.P.-201301).On any working day between 9 A.M. to 8 P.M."></ContactUsCard>
                <ContactUsCard phone={phone} heading="Help & Support" text="Please don't hesitate to contact us by phone or any other means . We are ready to address any questions or concerns you may have about our process, partners, or any issues you may be experiencing." l1="9311216559" l2="9311216558" styleds={true}></ContactUsCard>
                <ContactUsCard heading="Write us via Email" text="Please provide us with your query on email address aliyaglobaleducation@gmail.com so that we constantly update you, do not miss out on important notifications."></ContactUsCard>
            </div>
            <Map></Map>
        </StyledContactUs>
     );
}
 
export default ContactUs;