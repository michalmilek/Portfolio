import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FadeInWhenVisible({ children }: any) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.3 }}
      variants={{
        visible: { scale: 1 },
        hidden: { scale: 0 },
      }}>
      {children}
    </m.div>
  );
}

const Contact = () => {
  const boxVariants = {
    hidden: { y: 300 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const form = useRef();

  const sendEmail = (e: any) => {
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
    <m.div
      ref={ref1}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
      id="Contact">
      <form ref={form} className="contact" onSubmit={sendEmail}>
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
    </m.div>
  );
};

export default Contact;
