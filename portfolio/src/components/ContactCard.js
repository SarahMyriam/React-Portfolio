import React from 'react';


function ContactCard(){
    return(
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-heading">
                        <h2>Contact</h2>
                        <h6>Chat Soon!</h6>
                    </div>
                </div>
                
                <div className="contact-items">
                    <div className="contact-item">
                        <div className="icon"><img src="../images/call-me.png" alt=""/></div>
                        <div className="contact-info">
                            <h6>Phone</h6>
                            <h4>347-792-6262</h4>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <div className="icon"><img src="../images/email-me.png" alt=""/></div>
                        <div className="contact-info">
                            <h6>Email</h6>
                            <h4>sarahmyriamb@gmail.com</h4>
                        </div>
                    </div>

                </div>
            </section>
        );
    }

    export default ContactCard; 