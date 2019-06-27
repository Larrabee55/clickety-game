import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";

import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0,
    answer: ""
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    this.setState({ answer: "Incorrect" });
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if (friends[i].count === 0) {
          friends[i].count = friends[i].count + 1;
          this.setState({ answer: "Correct" });
          this.setState({ score: this.state.score + 1 });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <div className="jumbotron">
          <h1 className="display-4"> League of Legends Click Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>

        <div className="container">
          <Score score={this.state.score} highscore={this.state.highscore} answer={this.state.answer}></Score>

          <div className="row">
            {this.state.friends.map(friend => (
              <FriendCard
                clickCount={this.clickCount}
                id={friend.id}
                key={friend.id}
                image={friend.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
