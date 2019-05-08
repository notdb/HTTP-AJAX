import React from "react";

function FriendsComponent(props) {
  return (
    <div>
      {props.friends.map(friend => (
        <div>
          <p> {friend.name}</p>
          <p> {friend.age}</p>
          <p> {friend.email}</p>
        </div>
      ))}
    </div>
  );
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
