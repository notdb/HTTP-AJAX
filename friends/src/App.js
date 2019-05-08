import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FriendsComponent from "./components/FriendsComponent";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = { friends: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
        console.log(this.state.friends);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">New App Header</header>
        {this.state.friends.map(friend => (
          <FriendsComponent
            key={friend.id}
            name={friend.name}
            email={friend.email}
            age={friend.age}
          />
        ))}
      </div>
    );
  }
}

export default App;
