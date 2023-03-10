import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/sunglasses.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Vogue Helper </h1>
        <p> Finding the best style fit for you!</p>
        <Link to="/login">
          <button> Login </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;