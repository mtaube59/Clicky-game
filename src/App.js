import React, { Component } from "react";
import NarutoCharacters from "./components/NarutoCharacters";
import Wrapper from "./components/Wrapper";
import { Container, Jumbotron } from "react-bootstrap"
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav";
// import narutoCharacters from "./components/narutoCharacters";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    clicked: [],
  };

  onClick = (id) => {
    let isClicked = this.state.clicked.indexOf(id);
    console.log(isClicked);
    if (isClicked >= 0) {
      this.setState({ score: 0 });
      this.setState({clicked: []})
    }
    else {
      let newArray = [...this.state.clicked, id];
      this.setState({score: this.state.score + 1, clicked: newArray})
      }
    console.log(isClicked);
    console.log("Hello ive been clicked");
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {/* <Jumbotron></Jumbotron> */}
        <Wrapper>
          {/* <Title>Clicky Game</Title> */}
          {this.state.friends.map(friend => (
            <NarutoCharacters
              clickHandler={this.onClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
