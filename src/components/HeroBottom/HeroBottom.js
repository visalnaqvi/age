import { StyledHeroBottom } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import aus from "../../res/countries/aus.jpeg"
import can from "../../res/countries/can.jpeg"
import iran from "../../res/countries/iran.jpeg"
import ky from "../../res/countries/ky.jpeg"
import russia from "../../res/countries/russia.jpeg"
import uk from "../../res/countries/uk.jpeg"
import usa from "../../res/countries/usa.jpeg"

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.6,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                autoplay: true,
                autoplaySpeed: 2500,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
    ]
};
const HeroBottom = () => {
    return (<StyledHeroBottom>
        <p className="main-head"><span>1500+ global universities</span> at your fingure tips</p>
        <Slider {...settings}>
            <div className="in">
                <img src={aus} alt="" />
                <div className="details">
                    <p className="titlein">Why Australia?</p>
                    <p className="text">In recent years, Australia, the land of Oz, became one of the hottest education destinations on the globe. It is highly intensive in terms of knowledge imparted to the students, as Australian universities used to incorporate the latest innovations, technological advances, and current trends in the industry to ensure that their programs meet the highest education standards. The emphasis is on making education practical to meet the demands of the industry.
                        <br /><br />
                        Australian universities offer a range of degrees and courses, and students have plenty of options to choose from in terms of courses in their chosen field as well as universities offering their field. Vocational programs are also increasingly popular as students can gain from the career-centric and valuable skills that most employers look for. Australia is a great place for students interested in research. There are plenty of research opportunities available to eligible professionals and students alike. The country has a reputation for being safe, friendly, quiet laid-back, and peaceful. International students are readily accepted by their fellow students and professors.</p>
                </div>
            </div>
            <div className="in">
                <img src={can} alt="" />
                <div className="details">
                    <p className="titlein">Why Canada?</p>
                    <p className="text">Canada consistently ranks as one of the best countries in the world and is declared the best country for quality of life by U.S. News Best Countries Rankings 2018. All universities from Canada offer English-taught degrees for all Bachelor’s, Master’s, and Ph.D. levels, so language would never be a hurdle for students. University programmes are organized through traditional lectures, combined with workshops, group work, assignments and projects.
                        <br /><br />
                        The classroom atmosphere in the university is incredibly open and friendly, where professors are merely the guides that help students become independent learners. Counting over 120,000 international students each year, anywhere in Canada, students will be surrounded by a large multicultural environment, both in classrooms, as well as in society. This creates a great advantage for any foreigner, meaning that you can easily adapt and make friends. Canada is considered quite successful in offering career-focused programs, curriculum adapted to current events and the needs of the job market, and also has a high employability rate.</p>

                </div>
            </div>
            <div className="in">
                <img src={iran} alt="" />
                <div className="details">
                    <p className="titlein">Why Iran?</p>
                    <p className="text">The Republic of Iran is a country in Western Asia and one of the oldest civilizations in the world dating back to 2800 BC. Art, literature, religion, tradition, music, architecture, and ceremony come together to create a culture that is steeped in the past while trying to embrace the future without losing anything vital in the process. Iranian universities are best known for their programs in chemistry, medicine, engineering, and physics but also attract foreign students who come to Iran to study the culture and history of the region. 
                    <br /><br />
                    While there are no proficiency requirements to study in Iran, the courses are taught in Persian, which made it mandatory that students must learn to read, write, and communicate effectively in Persian in order to excel in these programs. International Muslim students pursuing Islamic studies in Iran are eligible to receive scholarships that waive tuition, boarding, and medical expenses while also providing living expenses for the duration of their studies. As Asia’s fourth-largest UNESCO World Heritage Site, Iran houses many historical sites and tourist attractions in various provinces and cities. It would preferably be a good destination for study as well as tourism.</p>

                </div>
            </div>
            <div className="in">
                <img src={ky} alt="" />
                <div className="details">
                    <p className="titlein">Why Kyrgyzstan?</p>
                    <p className="text">Studying in Kyrgyzstan gives the student a unique perspective of understanding of Asian culture as well as the rich traditions of ancient cultures, which have remained largely unchanged in this region. The country is known for Medical study. Universities in Kyrgyzstan offer an optimal teacher-to-student ratio, which allows students to get complete attention from faculty members helping their professional development.
                        <br /><br />
                        Students in these universities are also encouraged to be a part of extra-curricular to co-curricular activities so as to ensure holistic development of personality and skills. The medium of instruction for students studying in Kyrgyzstan is English, which is a plus point for international students.

                        The cost of living in Kyrgyzstan is average for the region. Students who shop smart will be able to live on a modest amount while studying in the country.</p>

                </div>
            </div>
            <div className="in">
                <img src={russia} alt="" />
                <div className="details">
                    <p className="titlein">Why Russia?</p>
                    <p className="text">Russia, the largest country in the world with the highest literacy rate of 99.5 percent. Its population comprises more than 100 different ethnic groups having different cultural and customary practices. With its rich and diverse history, Russian culture today is a complex mixture of tradition and innovation.
                        <br /><br />
                        Being home to more than 500 universities offering more than 17000 courses in every possible subject and academic level – be it bachelors, master’s, state examinations, or doctoral degrees. And maintain dominance in the field of science. International students in Russia have a great opportunity to enjoy their hospitality and get to know their customs and traditions and culture. Most universities in Russia teach in the Russian language that makes learning the Russian language necessary to study in Russia that ultimately enhances the attraction in CV. Russia provides the cheapest education in comparison to western countries and also has a low cost of living.</p>

                </div>
            </div>
            <div className="in">
                <img src={uk} alt="" />
                <div className="details">
                    <p className="titlein">Why United Kingdom?</p>
                    <p className="text">The United Kingdom (UK) is a group of countries comprising England, Scotland, Northern Ireland, and Wales, with the second-largest destination for more than 4lakh international students that accounted for one-fifth of its student population. The UK consists of top-ranked universities offering thousands of courses for higher education. They have a reputation for developing the skills that employers are looking for. You will get the opportunity to actively engage with your tutors through lively seminars, discussions, and practical projects.
                        <br /><br />
                        This will help you develop critical thinking, creativity, and confidence. The students get to explore, interact and experience a multicultural society and its diverse nature. The UK has a temperate maritime climate that is peaceful and calm that is helpful for students to concentrate on study and provides an ecosystem for healthy living. You can enjoy a life-changing student experience with good value for money spent.</p>

                </div>
            </div>
            <div className="in">
                <img src={usa} alt="" />
                <div className="details">
                    <p className="titlein">Why U.S.A.?</p>
                    <p className="text">Universities in the U.S. continue to maintain a strong presence among the top-ranked education institutions in the world. With their always-changing and evolving classrooms, these universities continue to attract the largest bunch of international students from all over the world and are courageously working every year to change the education they deliver so that foreign students from all over the world are prepared to go back home and find wonderful careers opportunities.
                        <br /><br />
                        Students often remark that their classes and dormitories are full of students from every nationality, religion, or ethnicity, and having access to interact with them provides an opportunity to explore diversity across the globe. All campuses include lots of facilities meant to offer students a relaxing and entertaining time while they are not in class or involved in assignments and study. In addition to excellent English language skills, your time abroad in the USA will help you become more outgoing, confident, communicative, and always up for any kind of challenge. Studying in the US may help students to become a personality in totality.</p>

                </div>
            </div>
        </Slider>
    </StyledHeroBottom>);
}

export default HeroBottom;