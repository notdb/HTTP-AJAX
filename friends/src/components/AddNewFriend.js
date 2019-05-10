import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import axios from "axios";

class AddNewFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  onChange = e => {
    // need to have named variables to pass into setState
    let name = e.target.name;
    let value = e.target.value;
    if (e.target.name === "age") {
      e.target.value = parseInt(e.target.value, 10);
    }

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
  };

  render() {
    return (
      <div>
        <h2>Add a new friend below</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            placeholder="name"
            value={this.state.friend.name}
          />
          <input
            type="number"
            name="age"
            onChange={this.onChange}
            placeholder="age"
            value={this.state.friend.age}
          />
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            placeholder="email"
            value={this.state.friend.email}
          />
          <button>Add new friend</button>
        </form>
      </div>
    );
  }
}

export default AddNewFriend;
