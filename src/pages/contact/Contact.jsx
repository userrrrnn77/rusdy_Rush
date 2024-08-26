import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./cont.css";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y4kgcab",
        "template_sgmcu5n",
        form.current,
        "WAxo5YAV2-J3Qay6g"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Email berhasil dikirim!");
          form.current.reset(); 
        },
        (error) => {
          console.log(error.text);
          setStatus("Email gagal dikirim.");
        }
      );
  };

  return (
    <div className="contact">
      <div className="conMaps">
        <iframe
          className="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.20960985303!2d112.63028078987261!3d-7.275612006081954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1724332545578!5m2!1sen!2sid"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="inputDataDiri">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="inputCuy"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="inputCuy"
            required
          />
        </div>
        <textarea
          name="message"
          className="inputDesk"
          placeholder="Description"
        ></textarea>
        <div className="conInfo">
          <div className="instagram">
            <div className="iconsIns">
              <FaInstagram className="ig" />
            </div>
            <span>@nott404found</span>
          </div>
          <button type="submit" className="conSub">
            Submit
          </button>
        </div>
        {status && <p className="statusMessage">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
