import React from "react";
import "./home.css";
const Home = () => {
  return (
    <section className="home">
      <div className="setContainer container">
        <div className="homeText">
          <h1 className="title">
            Select the Best Adverstise for your Business
          </h1>
          <p className="subTitle">
            Adboard! This is the World Only Place for publishing your brand
          </p>

          <button className="btn">
            <a href="#" className="btn btnHome">
              Explore Now
            </a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" name="" id="" placeholder="Dream Destination" />
          </div>

          <div className="distDiv">
            <label htmlFor="distance">distance</label>
            <input type="text" name="" id="" placeholder="11/Meters" />
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" name="" id="" placeholder="$1500-$2000" />
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
