import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const User = props => {
  //console.log(props);
  const { id, urls, user, alt_description } = props.image;
  return (
    <div className='col-md-6'>
      <div className='single-user' key={id}>
        <img src={urls['regular']} alt='' />
        <div className='user-info'>
          <h4>{user['name']}</h4>
          <p>{alt_description}</p>
          <button className='notsupport'>Likes: {user['total_likes']}</button>
          <button className='notsupport'>Photos: {user['total_photos']}</button>
          <button
            onClick={() => props.handleAddUser(props.image)}
            style={{ width: '100%', backgroundColor: 'green' }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            &nbsp; &nbsp; Add Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
