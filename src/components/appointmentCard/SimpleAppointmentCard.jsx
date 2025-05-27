import React from 'react';
import './SimpleAppointmentCard.css';
import '../../styles/typography.css'

const SimpleAppointmentCard = ({ title, time, icon, flex = '1' }) => {
  return (
    <div className={"simple-appointment-card "} style={{flex}}>
      <div className="card-left">
        <div className="card-text">
          <div className='card-heading-appointment-card'>
            <h3 className='text-sm' >{title}</h3>
            <span className="card-icon">{icon}</span>
          </div>
            <p className='text-xs'>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
