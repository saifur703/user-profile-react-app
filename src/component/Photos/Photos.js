import React, { useState } from 'react';
import './Photos.css';
import User from '../User/User';
import UserCount from '../UserCount/UserCount';
const Photos = () => {
  const [photo, setPhoto] = useState([]);
  const [user, setUser] = useState([]);

  const handleAddUser = users => {
    // console.log('Handle Add user Clicked.', users);
    const newUser = [...user, users];
    setUser(newUser);
  };

  fetch(
    'https://api.unsplash.com/photos/?client_id=pWru0HMLG83tSGhjdC2MsAqb45pREMRriGTAIxqW7WQ'
  )
    .then(res => res.json())
    .then(data => setPhoto(data))
    .then(err => console.log(err));
  return (
    <div className='user-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              {photo.map(ph => (
                // <img key={ph.id} src={ph.urls['thumb']} alt='' />

                <User image={ph} handleAddUser={handleAddUser}></User>
              ))}
            </div>
          </div>
          <div className='col-md-4'>
            <div className='user-count-area'>
              <h2>User</h2>
              <UserCount user={user}></UserCount>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
