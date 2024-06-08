import React from "react";
import "./offer.css";
import { BiSolidOffer } from "react-icons/bi";

const Offer = () => {
  return (
    <section>
      <div className="offer container section">
        <div className="secContainer">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From every corner of the world, our hotels are located in the heart
            of the best cities in the world. Discover our offers and book your
            stay now.
          </p>
        </div>
        <div className="mainContent grid">
          <div className="singleOffer">
            <div className="destImage">
              <img src="" alt="Image Title" />
              <span className="discount">30% Off</span>
            </div>
            <div className="offerBody">
              <div className="price flex">
                <h4>$1000</h4>
                <span className="status">For Rent</span>
              </div>
              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <BiSolidOffer className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
