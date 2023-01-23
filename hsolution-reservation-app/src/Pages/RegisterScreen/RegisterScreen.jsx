import React from "react";
import { Link } from "react-router-dom";
import "./RegisterScreen.scss";
const RegisterScreen = () => {
  return (
    <section className="RegisterScreen">
      <container className="container-form">
        <div className="title">Inscription</div>
        <form action="#" className="form">
          <div>
            {" "}
            <div className="column">
              <div className="input-box">
                <label>Nom</label>
                <input type="text" placeholder="Nom" required />
              </div>
              <div className="input-box">
                <label>Prénom</label>
                <input type="text" placeholder="Prénom" required />
              </div>
            </div>
            <div className="input-box">
              <label>Adresse E-mail</label>
              <input type="email  " placeholder="Email" required />
            </div>
            <div className="input-box">
              <label>Mot de passe ( 8 caractères min )</label>
              <input
                type="password"
                minlength="8"
                placeholder="Mot de passe"
                required
              />
            </div>
            <div className="input-box">
              <label>Confirmation mot de passe </label>
              <input
                type="password"
                placeholder="Confirmation mot de passe"
                required
              />
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <label>Téléphone</label>
              <input type="number" placeholder="+33 " required />
            </div>
            <div className="input-box">
              <label>Date de naissance</label>
              <input type="date" placeholder="jj/mm/aaaa" required />
            </div>
          </div>
          <div className="gender-box">
            <h3>Sexe</h3>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" required />
                <label htmlFor="check-male">Homme</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-female" name="gender" required />
                <label htmlFor="check-female">Femme</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" required />
                <label htmlFor="check-other">Ne pas renseigné</label>
              </div>
            </div>
          </div>
          <div className="Adresse">
            <div className="input-box">
              <label htmlFor="">Adresse</label>
              <input type="text" placeholder="Adresse" required />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Complément d'adresse" />
            </div>
            <div className="column">
              <div className="select-box">
                <select name="" id="">
                  <option default value="France">
                    France
                  </option>
                  <option>Espagne</option>
                  <option>England</option>
                </select>
              </div>
              <div className="input-box city">
                <input type="text" placeholder="Ville" required />
              </div>
            </div>

            <div className="column">
              <div className="input-box">
                <input type="text" placeholder="Region" required />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Code Postal" required />
              </div>
            </div>
          </div>
          <button className="">Envoyé</button>
          <div className="redirect">
            <span>
              Vous possédez déja un compte? <Link>Connectez vous </Link>
            </span>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <button className="btn-fb">Login with Facebook</button>
            <button className="btn-google">Login with Google</button>
          </div>
        </form>
      </container>
    </section>
  );
};

export default RegisterScreen;
