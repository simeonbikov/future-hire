import React from "react";
import "../pages/ContactUs.css";
import pic8 from "../Images/pic8.jpeg";

const ContactUs = () => {
	return (
		<div>
			<img src={pic8} alt="Customer-service" className="contact-img" />
			<div className="container">
				<div className="contact-info">
					<p>If you have any enquiries, please click the button below</p>
					<p>and a CodeYourFuture team representative</p>
					<p>will get back to you within 24 hours.</p>
				</div>
				<div className="form">
					<div className="button-container">
						<button type="submit" className="submit-button">
							<a href="mailto:someone@yoursite.com" className="submit-button-link">
								Email Us
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};


export default ContactUs;