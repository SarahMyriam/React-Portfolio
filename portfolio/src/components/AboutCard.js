import React from 'react';
import smb from "../images/smb.jpeg";


function AboutCard () {
    return (
        <section className="container-fluid">
            <div id="maintitle" className="row">
                <div className="col-sm-12">
                    <h3>Who Am I?</h3>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div id="aboutme" className="col-sm-12">
                    <img id="smb" src={smb} alt="smb"/>
                        <p>My name is <strong>Sarah Myriam</strong>,I am a student in Columbia Engineering.</p>
                        <p>Beginning spring 2020, I stumbled upon coding through an internet forum and fell in love with it.</p>
                        <p>I am a full-stack web developer with experience in JavaScript, Node.js, MongoDB and React .</p>.
                        <p>Outside of coding I enjoy extensive reading, journaling,discovering new cuisines and cultures.</p>
                        <p>How did I begin Coding!</p>
                        <p>Well,I discovered my love for extensive reading a little over 3 years, began with 10 pages a day to now 25pages.During the 2020 pandemic out of boredom and curiosity, I reasearch different ways to educate myself and came across a site called FreeCodeCamp, I enjoyed the working with HTML and CSS. JavaScript was a bit hard so I decided to join an Engineering BootCamp where I could learn about Full Stack Web Development.There's never a better time to up-skill one-self.</p>
                        <p>Before Columbia Engineering for Full Stack Web Development, I attented Buffalo State College as a Chemistry Student for 3 years.</p>
                        <p>Let dive in deeper, before New York City, I grew up in West Africa, Ivory Coast, my first language is French. I am a Luxury Retail Expert with 6 years of Fine Jewelry experience. I love and enjoy extensive reading, journaling and problem solving.</p>
                        <p>Later in life, I would love to continue my career as a software engineer and problems solver.</p>
                </div>
            </div>  
        </section>
    );
}

export default AboutCard;