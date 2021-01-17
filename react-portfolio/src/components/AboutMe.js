import  React from "react";
import smb from "../assets/smb.jpeg";

function AboutMe(){
    return (
        <section className ="about">
            <div className="about-container">
                <div className="profile-img">
                    <img id="smb" src={smb} alt="smb"/>
                </div>
                <div className="about-infos">
                    <div className="about-heading">
                        <h1>About</h1>
                        <h6>Me</h6>
                    </div>
                    <p>My name is Sarah Myriam,I am a student in Columbia Engineering.</p>
                    <p>Before Columbia Engineering for Full Stack Web Development, I attented Buffalo State College as a Chemistry Student for 3 years.How did I begin Coding!Well,I discovered my love for extensive reading a little over 3 years, began with 10 pages a day to now 25pages.During the 2020 pandemic out of boredom and curiosity, I reasearch different ways to educate myself and came across a site called FreeCodeCamp, I enjoyed the working with HTML and CSS. JavaScript was a bit hard so I decided to join an Engineering BootCamp where I could learn about Full Stack Web Development.There's never a better time to up-skill one-self.</p>
                    <p>Let dive in deeper, before New York City, I grew up in West Africa, Ivory Coast, my first language is French. I am a Luxury Retail Expert with 6 years of Fine Jewelry experience. I love and enjoy extensive reading, journaling and problem solving.</p>
                </div>
                <div className="social-media-container">
                    <div className="social-media">
                        <ul className="nav-link">
                            <li>
                                <a href="https://www.linkedin.com/in/sarahmyriambamba/" className="icon-link"><i className="fa fa-linkedin fa-2x"></i></a>
                            </li>
                            <li>
                            <a href="https://codepen.io/MyriamSarah" className="icon-link"><i className="fa fa-codepen fa-2x"></i></a>
                            </li>
                            <li>
                            <a href="https://github.com/SarahMyriam" className="icon-link"><i className="fa fa-github fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
