
import React from "react";
import './Contacts.css'
import Nav from "../Navbar/Nav";

import { useRef } from 'react'; //emailjs react website template
import emailjs from "emailjs-com";
const ContactUsPage = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tzybipo', 'template_0wwryso', form.current, 'Pxd79CS8xFywEDsF6')
        e.target.reset();
    };

    return (
        <>
        <Nav/>
      
            <section className="contactus-section">
                <div className="contact-us">
                    <div className="">
                        <div className="col-lg-12 ">
                            <div className="contact-u d-flex gap-5">
                                <div className="contact-leftside  col-lg-5">
                                    <h2 className="main-heading fw-bold">
                                        Connect With Our <br /> Sales Team.
                                    </h2>
                                    <p className="main-hero-para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Deserunt eaque alias similique.
                                    </p>
                                    <figure>
                                        <img
                                            src="./assests/vector.png"
                                            alt="contatUsImg"
                                            className="img-fluid height-image d-none d-md-block d-xxl-none"
                                        />
                                    </figure>
                                </div>

                                {/* right side contact form  */}
                                <div className="contact-rightside col-12 col-lg-6">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="row">
                                            <div className="col-12 col-lg-5 contact-input-feild">
                                                <label htmlFor="" className="ml-1">Name*</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub"
                                                    placeholder="First Name"


                                                />
                                            </div>

                                            <div className="col-12 col-lg-5 contact-input-feild">
                                            <label htmlFor="" className="ml-1">Company Size*</label>

                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub"
                                                    placeholder="Company"

                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-5 contact-input-feild">
                                            <label htmlFor="" className="ml-1">Designation*</label>

                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub"
                                                    placeholder="Designation "

                                                />
                                            </div>
                                            <div className="col-12 col-lg-5 contact-input-feild">
                                            <label htmlFor="" className="ml-1">Company Size*</label>

                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub "
                                                    placeholder="Company Size"

                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-5 contact-input-feild">
                                            <label htmlFor="" className="ml-1">Contact Us*</label>

                                                <input
                                                    type="text"
                                                    name="address"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub"
                                                    placeholder="Contact Us"

                                                />
                                            </div>
                                            <div className="col-12 col-lg-5 contact-input-feild">
                                            <label htmlFor="" className="ml-1">Email*</label>

                                                <input
                                                    type="text"
                                                    name="address"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub"
                                                    placeholder="Email Address"

                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-lg-10 ">
                                            <label htmlFor="" className="ml-1">Select Service*</label>

                                                <select class="form-select contact-input-feild-sub1" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-style w-10"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUsPage;

