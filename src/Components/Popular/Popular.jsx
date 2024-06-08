import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import "./popular.css";

import img1 from ".././../Assets/mandir.png";
import img2 from ".././../Assets/2.jpg";
import img3 from ".././../Assets/3.jpg";
import img4 from ".././../Assets/4.jpg";
import img5 from ".././../Assets/5.jpg";

//we have to make high order array for destination image using Map,
// we need to list all the dara and call it by index/id

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Soda shop",
    location: "post office,navrangpura,ahmedabad",
    speciality: "in Prime location",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "pan ka galla",
    location: " GIDC,waghodiya",
    speciality: "peaple crowd",
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: "kirana shop",
    location: "Iscon cross road,ahmedabad",
    speciality: "none",
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle: "retail store",
    location: " sarkhej,ahmedabad",
    speciality: "none",
  },
];
const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              Namaskar! This is the World Only Place for publishing your brand
              image to entire World!
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className=" icon leftIcon" />
            <BsArrowRightShort className="icon RightIcon" />
          </div>
        </div>
        <div className="mainContent grid">
          {
          Data.map(({id, imgSrc, destTitle, location, speciality}) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt=" " />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightSquare className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h5>{speciality}</h5>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
