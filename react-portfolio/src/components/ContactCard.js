

function ContactCard(){
    return(
        <section className="contact">
            <div className="container">
                <div className="container-heading">
                    <h1>Contact</h1>
                    <h6>Chat Soon!</h6>
                </div>
            </div>
            <div className="contact-items">
                <div className="contact-item">
                <div class="icon"><img src="./assets/call-me.png" alt=""/></div>
                    <div>
                        <h4>Phone</h4>
                        <h6>347-792-6262</h6>
                    </div>
                </div>
                <div className="contact-item">
                <div class="icon"><img src="./assets/email-me.png" alt=""/></div>
                    <div>
                        <h4> Email</h4>
                        <h6>sarahmyriamb@gmail.com</h6>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default ContactCard;