import React, { useRef, useState } from "react";
import "./ContactStyle.scss";
import { FiSend } from "react-icons/fi";
import Result from "../../components/Result/Result";

export default function ContactScreen() {
  return (
    <section className="form_section">
      <div className="container_contact">
        <div className="contactInfo">
          <h2>Me contacter</h2>
          <ul className="info">
            <li>
              <p>Pour tout renseignement ou réservation à nous contacter.</p>
            </li>
            <li>
              <span>
                <FiSend className="contact_icons" />
              </span>
              <span>
                <a href="mailto:Hsolution.dev@gmail.com?subject=Réservation">
                  Hsolution.dev@gmail.com
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="contactForm">
          <h2> Votre Message</h2>
          <form className="form_content">
            <div className="formBox">
              <div className="inputBox w50">
                <input
                  type="text"
                  id="firstName"
                  name="user_lastName"
                  required
                />
                <span>Nom</span>
              </div>
              <div className="inputBox w50">
                <input type="email" id="email" name="user_email" required />
                <span> Adresse e-mail</span>
              </div>
              <div className="inputBox w50">
                <input type="phone" id="phone" name="user_phone" required />
                <span>Téléphone</span>
              </div>
              <div className="inputBox w50">
                <input type="text" id="objet" name="user_subject" required />
                <span>Sujet</span>
              </div>
              <div className="inputBox w100">
                <textarea
                  className=""
                  type="text"
                  id="message"
                  name="user_message"
                  maxLength="500"
                  size="12"
                  required
                />
                <span>Message</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Envoyer" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
