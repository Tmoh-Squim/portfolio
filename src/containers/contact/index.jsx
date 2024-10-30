import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    subject: "Portfolio messages",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qzxl6jp",
        "template_w9kvgrw",
        formData,
        "KWleLqdJwS4tz9FRZ"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Handle successful response
          alert("Message sent successfully!");
        },
        (err) => {
          console.error("FAILED...", err);
          // Handle errors here
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form className="contact__content__form" onSubmit={handleSubmit}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="user_name"
                  className="inputName"
                  type="text"
                  value={formData.user_name}
                  onChange={handleChange}
                />
                <label htmlFor="user_name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="user_email"
                  className="inputEmail"
                  type="text"
                  value={formData.user_email}
                  onChange={handleChange}
                />
                <label htmlFor="user_email" className="emailLabel">
                  Email
                </label>
              </div>

              <div>
                <textarea
                  required
                  name="message"
                  className="inputDescription"
                  type="text"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                />
                <label htmlFor="message" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            {formData?.user_email !== "" &&
              formData?.message !== "" &&
              formData?.user_name !== "" ? (
                <button type="submit">Submit</button>
              ):(
                <div disabled className="disabled">Submit</div>
              )}
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
