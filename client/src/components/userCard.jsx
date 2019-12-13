import React from 'react';

const UserCard = ({props}) => {

  return (
    <div className="userList__card">
      <img src={props.avatar} alt="avatar"/>
      <div> Name:{props.username} </div>
      <div> Age:{props.age} </div>
      <div> Country:{props.country} </div>
      <div> Search{props.searchGender} </div>
    </div>
  )
}

export default UserCard;
