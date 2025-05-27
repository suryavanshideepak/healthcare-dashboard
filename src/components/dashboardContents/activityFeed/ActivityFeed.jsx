import React from 'react';
import './ActivityFeed.css';
import { barData } from '../../../data/activityData';

const ActivityFeed = () => {

  return (
    <div className="activity-feed">
      <h3 className="activity-title">Activity</h3>
      <p className="activity-subtitle">3 appointments on this week</p>

      <div className="activity-chart">
        {barData.map((day, index) => (
          <div key={index} className="bar-container">
            <div
              className="bar"
              style={{ height: `${day.value * 20}px` }}
              title={`${day.value} appointments`}
            />
            <span className="bar-label">{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
