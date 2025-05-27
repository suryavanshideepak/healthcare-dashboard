import React from 'react';
import './CalendarView.css';
import '../../../styles/typography.css'
import { calendarDays, timesRow2, timesRow3, timesRow4, weekDays } from '../../../data/calendar';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const CalendarView = () => {
  return (
    <div className="calendar-view-custom">
      <div className='calendar-heading'>
        <h3 className="calendar-title text-lg">October 2021</h3>
        <div className='left-right-calendar-icon'>
          <ChevronLeft className='left-cursor'/>
          <ChevronRight/>
        </div>
      </div>
      

      <div className="calendar-row calendar-header-row">
        {weekDays.map((day, idx) => (
          <p key={idx} className="calendar-cell weekday-header text-xs font-medium">
            {day}
          </p>
        ))}
      </div>

      <div className="calendar-row calendar-date-row">
        {calendarDays.map((day, idx) => (
          <p
            key={idx}
            className={`calendar-cell ${day === 31 ? 'disabled' : ''} text-lg font-medium`}
          >
            {day}
          </p>
        ))}
      </div>

      <div className="calendar-row">
        {timesRow2.map((time, idx) => (
          <p key={idx} className="calendar-cell time-cell text-xs">{time || '-'}</p>
        ))}
      </div>
      <div className="calendar-row">
        {timesRow3.map((time, idx) => (
          <p key={idx} className={`calendar-cell time-cell text-xs ${time === '9:00' ? 'highlight-time':''} ${idx === 3 ? 'lighthighlight-time':''}`}>{time || '-'}</p>
        ))}
      </div>
      <div className="calendar-row">
        {timesRow4.map((time, idx) => (
          <p key={idx} className={`calendar-cell time-cell text-xs ${idx === 2 || idx === 5 ? 'lighthighlight-time':''}`}>{time || '-'}</p>
        ))}
      </div>
      <div className="appointment-details">
        <div className="appointment-card1">
            <div className='card-icon'>
                <h4 className='text-sm'>Dentist</h4>
                 🦷
            </div>
          <p className='xs'>09:00- 11:00</p>
          <p className='xs'>Dr. Cameron Williamson</p>
        </div>
        <div className="appointment-card2">
            <div className='card-icon'>
                <h4 className='text-sm'>Physiotherapy Appointment</h4>
                💪🏻
            </div>
          <p className='xs'> 11:00- 12:00</p>
          <p className='xs'> Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
