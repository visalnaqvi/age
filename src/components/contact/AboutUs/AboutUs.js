import { StyledAboutUs } from "./style";
const AboutUs = () => {
    return ( 
        <StyledAboutUs>
            <p className="title">About Us</p>
            <div className="about-card">
                <p className="heading">Aliya Global Education</p>
                <p className="text">
                Aliya Global Education (AGE) is a venture started under the guidance of Late Zafar Mehdi Zaidi, retired Indian Air Force and Late S.G. Hasnain lecturer retired from Govt. College. “AGE” is established with an objective to assist millions of students, aspiring to study in courses of interest and institutions across the globe to secure their future with excellence.
<br/>We provide you with the best of guidance to exceed your expectations because we believe that your future is our priority. We aim for excellence and to build a society of students with a shining future and a healthy lifestyle.
                </p>
            </div>

            <div className="about-card" style={{backgroundColor:"#ecf39e90"}}>
                <p className="heading">Our Mission</p>
                <p className="text">
                “Education is the most powerful weapon which you can use to change the world.”
-Nelson Mandela
<br/><br/>
 “AGE” act as a bridge to connect student and the university to provide students one stop solution for all educational needs including the career bearing academic programs to follow their dreams. According to a survey, more than 80% of respondents agreed that studying abroad has enhanced their interest in academic study as well as wider exposure and diverse culture interaction. 
<br/><br/>
The team AGE works hard to provide you with opportunities to enhance your skills and become global citizens, who will learn and perform simultaneously with fastest changing world for a better tomorrow. 
<br/><br/>
AGE aimed to provide credit-bearing opportunities across the globe and the accessibility of all study abroad programs. We value individual needs, passion, aspiration, and opportunities for self-awareness for empowerment and overall growth. We are here to provide you with range of services including  career counselling, country selection, visa guidance and support, and online classes for GRE, GMAT, ILETS, SAT, TOEFL, etc. We will strive to work and ensure 100% client satisfaction.
                </p>
            </div>

            <div className="about-card" style={{backgroundColor:"#cbc0d390"}}>
                <p className="heading">Our Vision</p>
                <p className="text">
                Team AGE aspires to work round the clock to give you nothing but best. Our vision is to develop well rounded, confident and responsible individuals who aspire to exploit their full potential for success of their dream. We are engaged in sustainable practices to fulfil your need. Our main aim is to help students enjoy life by offering an affordable solution to global education.
                </p>
            </div>
        </StyledAboutUs>
     );
}
 
export default AboutUs;