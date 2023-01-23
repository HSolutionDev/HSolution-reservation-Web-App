import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./SigninScreen.scss";

const SigninScreen = () => {
  return (
    <section className="SigninScreen">
      <container className="container-form">
        <div className="title">Connexion</div>
        <form action="#" className="form">
          <div>
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
          </div>
          <div className="redirect">
            <Link>Mot de passe oublié ? </Link>
          </div>
          <button className="">Connexion</button>
          <div className="redirect">
            <span>
              Vous n'avez pas encore de compte ? <Link>Inscrivez-vous </Link>
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

export default SigninScreen;
