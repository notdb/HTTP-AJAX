import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import axios from "axios";

class FriendsComponent extends React.Component {
  state = {
    friend: this.props.friends,
    friend2: this.props.activeFriend
  };

  routeToFriend = (e, friend) => {
    e.preventDefault();
    this.props.history.push(`/friends/${friend.id}`);
    this.setState(prevState => ({
      friend2: friend
    }));
  };
  /*
  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends/${this.props.match.params.id}`)
      .then(res => this.setState({ friend2: res.data }))
      .catch(err => console.log(err));
  }
*/
  /*
  deleteFriend = e => {
    e.preventDefault();
    this.props.deleteFriend(this.state.friends.id);
  };
  */
  onChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "age") {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      friend2: {
        ...prevState.friend2,
        [name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend2);
    this.props.setUpdateForm(this.state.friend2);
  };

  render() {
    console.log(this.state.friend);
    console.log(this.state.friend2);
    return (
      <div>
        {this.props.friends.map(friend => (
          <div
            onDoubleClick={e => {
              this.routeToFriend(e, friend);
            }}
            key={friend.id}
          >
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <button onClick={() => this.props.deleteFriend(friend.id)}>
              Delete
            </button>

            <details>
              <summary>Update details</summary>
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
                <button>Update details</button>
              </form>
            </details>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsComponent;

/*

   {this.state.friends.map(friend => (
          <FriendsComponent
            key={friend.id}
            name={friend.name}
            email={friend.email}
            age={friend.age}
          />
*/
