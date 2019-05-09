import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import axios from "axios";

import FriendsComponent from "./components/FriendsComponent";
import Home from "./components/Home";
import AddNewFriend from "./components/AddNewFriend";

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

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="nav-links">
            <Link exact to="/">
              Home
            </Link>
            <Link to="/friends">Friends</Link>
            <Link to="/add-new-friend">Add New Friend</Link>
          </nav>
        </header>
        <Route exact path="/" component={Home} />
        <Route
          path="/friends"
          render={props => (
            <FriendsComponent {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/add-new-friend"
          render={props => (
            <AddNewFriend {...props} addFriend={this.addFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
