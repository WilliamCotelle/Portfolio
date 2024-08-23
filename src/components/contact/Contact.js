import React, { useState } from "react";
import emailjs from "emailjs-com";
import Style from "./Contact.module.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Email envoyé:", result.text);
          setSubmittedName(formData.name);
          setShowPopup(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Erreur d'envoi:", error.text);
        }
      );
  };

  return (
    <section className={Style.contact}>
      {!showPopup ? (
        <>
          <h2>Contactez-moi</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Envoyer</button>
          </form>
        </>
      ) : (
        <div className={Style.popup}>
          <p>
            Merci, {submittedName} ! 🎉
            <br />
            Votre message a bien été envoyé. Je vous répondrai dans les
            meilleurs délais.
          </p>
        </div>
      )}
    </section>
  );
};

export default Contact;
