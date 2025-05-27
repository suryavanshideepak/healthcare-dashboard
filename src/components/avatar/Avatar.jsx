import React from 'react';
import './Avatar.css'; 
import avatarImage from '../../assets/images/avatar.png'

const Avatar = ({ size = 42 }) => {
  return (
    <div
      className="avatar-circle"
      style={{ width: size, height: size }}
    >
      <img src={avatarImage} alt="Avatar" className="avatar-image" />
    </div>
  );
};

export default Avatar;
