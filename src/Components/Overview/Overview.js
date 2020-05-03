import React from "react";
import CardSmall from "../CardSmall/CardSmall";
import "./Overview.css";

const cardSmallList = [
  {
    icon: "images/icon-facebook.svg",
    social: "Facebook",
    pageViews: "87",
    growth: 3,
  },
  {
    icon: "images/icon-twitter.svg",
    social: "Twitter",
    pageViews: "52",
    growth: 2,
  },
  {
    icon: "images/icon-instagram.svg",
    social: "Instagram",
    pageViews: "5462",
    growth: 1375,
  },
  {
    icon: "images/icon-youtube.svg",
    social: "YouTube",
    pageViews: "87",
    growth: 3,
  },
];

function Overview() {
  return (
    <section className="Overview">
      <div className="Overview-wrapper">
        <h2 className="Overview-title">Overview - Today</h2>
        <div className="Overview-grid">
          {cardSmallList.map((cardData, i) => (
            <CardSmall key={i} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
