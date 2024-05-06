import React from 'react';
import './ProfileSection.css';

export const ProfileSection = ({ title, description, imageUrl }) => {
  return (
    <div className="profile-section">
      <div className='section'>
         <img src={imageUrl} alt="" className="profile-image" />
         <h1>{title}</h1> 
      </div>
        <hr /> 
      <div className="content">
        <p>{description}</p> 
      </div>
    </div>
  );
}
