import React from 'react';
import './UserCount.css';

const UserCount = props => {
  const users = props.user;
  return (
    <div className='user-count'>
      <p>Add User: {users.length}</p>
      <p>Like: </p>
      <p>Photos: </p>
      <p>Total: </p>
    </div>
  );
};

export default UserCount;
