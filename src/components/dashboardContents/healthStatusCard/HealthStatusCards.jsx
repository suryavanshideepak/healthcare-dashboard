import React from 'react';
import '../../../styles/typography.css';
import './HealthStatusCard.css';

const HealthStatusCards = ({data}) => {
  return (
    <div className="health-status-cards">
      {data.map((card, index) => (
        <div key={index} className="health-card">
          <div className="health-info">
            <div className='healthcard-heading'>
              <img src={card.image} alt={card.title} width={100} height={40}/>
              <h4>{card.title}</h4>
            </div>
            <p className='text-xs'>Date: {card.date}</p>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${card.health}%`,backgroundColor:card.color }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;