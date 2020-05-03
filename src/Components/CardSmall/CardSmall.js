import React from "react";
import "./CardSmall.css";

function CardSmall({ icon, social, pageViews, growth }) {
  return (
    <div className="Card-small">
      <p className="Card-small-views">Page Views</p>
      <p className="Card-small-icon">
        <img src={icon} alt={social} />
      </p>
      <p className="Card-small-number">{pageViews}</p>
      <p className="Card-small-percentage">
        <span>
          <img src="images/icon-up.svg" alt="" />
          {growth}%
        </span>
      </p>
    </div>
  );
}

export default CardSmall;
