import React from "react";
import Card from "../Card/Card";
import "./TopCardList.css";

const cardListData = [
  {
    username: "@erickleaopm",
    icon: "images/icon-twitter.svg",
    social: "Twitter",
    followers: "1483",
    today_followers: 12,
  },
  {
    username: "@erickleaopm",
    icon: "images/icon-instagram.svg",
    social: "Instagram",
    followers: "30",
    today_followers: 8,
  },
  {
    username: "@erickleaopm",
    icon: "images/icon-facebook.svg",
    social: "Facebook",
    followers: "50k",
    today_followers: 15,
  },
  {
    username: "@erickleaopm",
    icon: "images/icon-youtube.svg",
    social: "Youtube",
    followers: "20k",
    today_followers: -10,
  },
];

function TopCardList() {
  return (
    <section className="Top-Cards">
      <div className="Top-Cards-wrapper">
        <div className="Top-Cards-grid">
          {cardListData.map((cardData, i) => (
            <Card key={i} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
