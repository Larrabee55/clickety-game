import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="col-md-3 mb-3 d-flex justify-content-center" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
