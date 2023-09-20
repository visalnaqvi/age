import { StyledServices } from "./style";
import ServiceCard from "./serviceCard/serviceCard";
const Services = () => {
    return ( <StyledServices>
        <p className="title">Services</p>
        <p className="sub">
            We got a huge varity of <br/>services that we can offer.
        </p>
        <div className="wrapper flex-class">
            <div className="top flex-class">
                <ServiceCard styled={true} heading="Career Counseling" text="We focus on identifying your latent skill & interest and assist you with all necessary advice and support by expert councillors that would help you to manage your journey during the course of learning and changing working conditions aftermath."></ServiceCard>
                <ServiceCard heading="Countary Selection" text="AGE truly believe students who study abroad as next generation of global citizens. Thus we provide you with the top universities in UK, USA, NEW ZEALAND, AUSTRALIA, SINGAPORE, RUSSIA, IRAN and CANADA."></ServiceCard>
            </div>
            <div className="top flex-class">
                <ServiceCard heading="VISA Guidance" text="We with parent organization Aliya Tours and Travels, having three decade long experience in area, whose primary aim is to provide quality travel services to business and leisure travellers. One of our distinguished services is visa facilitation and we are one of the prominent visa facilitation service providers in India to countries like UK, USA, NEW ZEALAND, CANADA, AUSTRALIA, etc."></ServiceCard>
                <ServiceCard heading="Online Classes" text="We also provide students with online classes as it allows them to connect with diverse communities and they get to know more about international issues as well as become a part of a global classroom all from the comfort of their home. We conduct regular online classes for Academic and Professional courses like IX, XII, CA, CS, CMA AND  GRE, GMAT, ILETS, SAT, TOEFL as well as PTE."></ServiceCard>
            </div>
        </div>
    </StyledServices> );
}
 
export default Services;