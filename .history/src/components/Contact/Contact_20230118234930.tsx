import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const controls = useAnimation();
  const [ref1, inView1] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
    if (!inView1) {
      controls.start("hidden");
    }
  }, [controls, inView1]);

  const boxVariants = {
    hidden: { y: -500 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const form = useRef();
  const refs = useRef([ref1, form]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kjaqkiw",
        "template_incpxx8",
        form.current,
        "q2E4BSWb0WW9xWnF0"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={[form, ref1]}
      id="contact"
      className="contact"
      onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <img
        src="https://www.barstandardsboard.org.uk/uploads/assets/78047e4c-eb70-4e99-883629a2df65aaac/standard_page_image_d5501a18bab029a7f494f85235eb6626/AdobeStock172449829-Converted.png"
        alt="phone"
      />
    </form>
  );
};

export default Contact;
