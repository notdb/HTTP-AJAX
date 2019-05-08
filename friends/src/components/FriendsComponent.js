import React from "react";

function FriendsComponent(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.age}</p>
    </div>
  );
}

export default FriendsComponent;
