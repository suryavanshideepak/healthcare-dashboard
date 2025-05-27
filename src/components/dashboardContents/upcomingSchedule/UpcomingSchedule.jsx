import React from 'react';
import './UpcomingSchedule.css';
import '../../../styles/typography.css'
import SimpleAppointmentCard from '../../appointmentCard/SimpleAppointmentCard';
import { saturdayData,thursdayData } from '../../../data/appointments';


const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className='upcoming-heading'>The Upcoming Schedule</h2>
      <h4 className='text-sm section-schedule-heading'>On Thursday</h4>
      <div className="day-section">
        {
          thursdayData.length && thursdayData.map((data,idx) => {
            return(
              <SimpleAppointmentCard key={idx} title={data.title} time={data.time} icon={data.icon} flex={data.flex} />
            )
          })
        }
      </div>
      <h4 className='text-sm section-schedule-heading'>On Saturday</h4>
      <div className='day-section'>
        {saturdayData.length && saturdayData.map((data,idx) => {
          return(
            <SimpleAppointmentCard key={idx} title={data.title} time={data.time} icon={data.icon} flex={data.flex} />
          )
        })}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
