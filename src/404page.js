import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

export const NotFound = () => (
  <div class="main-container">
    <div className="inner-container">
      <img style={{ width: 500, marginTop: 50 }} src="https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e3028240e834dfea6e47f_bikini.svg" alt="" />
      <h1>404</h1>
      <h2>UH OH! You're lost.</h2>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <button class="btn green">
        <Link to="/">Go Home</Link>
      </button>
    </div>

  </div>
);
