import React from "react";

function Score(props) {
  return (

    <div className="score highscore Answer row">
      <div className="col-md-12 d-flex justify-content-center">
        <h2>{props.answer}</h2>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <h3>Score: {props.score}</h3>

      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <h3>HighScore: {props.highscore}</h3>
      </div>
    </div >
  );
}
export default Score;