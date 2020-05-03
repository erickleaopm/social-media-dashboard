import React from "react";
import "./Card.css";

function Card({ username, icon, social, followers, today_followers }) {
  const cardClass = `Card ${social.toLowerCase()}`;
  return (
    <article className={cardClass}>
      <p className="Card-title">
        <img src={icon} alt={social} />
        {username}
      </p>
      <p className="Card-followers">
        <span className="Card-followers-number">{followers}</span>
        <span className="Card-followers-title">Followers</span>
      </p>
      <p className="Card-today">
        <img src="images/icon-up.svg" alt="" />
        {today_followers} Today
      </p>
    </article>
  );
}

export default Card;
