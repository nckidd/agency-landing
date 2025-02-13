//import React from 'react';
import btnArrow from '/assets/images/btn-arrow.svg';
import contactThumb from '/assets/images/contact.png';
import { toast } from 'react-toastify';

const ContactV1 = () => {

    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "d9546d45-4f6e-4c81-8cab-95061107db6a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success",res);
            toast.success("Thanks for your message!");
            (event.target as HTMLFormElement).reset();
        } else {
            console.log("Error",res);
        }
    }

    return (
        <>
            <div className="contact-sec" id="contact">
                <div className="custom-row">
                    <div className="left">
                        <div className="contact-content">
                            <h3 data-aos="fade-up" data-aos-delay={200}>Let’s <span>Connect</span></h3>
                            <p>
                                <span className="required">*</span> Whether you have a question, or want to discuss a potential project, our team<br /> is excited to help. Please fill out the form below!
                            </p>
                            <form id="contact-form" className="contact-form" onSubmit={handleForm}>
                                <div className="input-group">
                                    <input type="text" name="name" placeholder="Name" autoComplete="off" required />
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <input type="email" name="email" placeholder="E-mail" autoComplete="off" required />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="phone" autoComplete="off" placeholder="Phone" required />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <textarea name="message" id="message" placeholder="Message" autoComplete="off" required />
                                </div>
                                <div className="input-group">
                                    <button type="submit" className="theme-btn">
                                        Send Message
                                        <img src={btnArrow} alt="icon" />
                                    </button>
                                </div>
                            </form>
                            <div id="result" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-box">
                            <img src={contactThumb} alt="contact-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;