import React, { useState } from "react";
import "../pages/ContactForm.css";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleHover = (event) => {
    const button = event.target;
    button.style.backgroundColor = "#a40000";
  };

  const handleMouseOut = (event) => {
    const button = event.target;
    button.style.backgroundColor = "#f44336";
  };

  return (
    <div>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="form-login"
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="contact-info">
        <p>If you'd rather speak on the phone, please use the number below:</p>
        <p>+4407918693873</p>
      </div>
    </div>
  );
};

export default Form;
