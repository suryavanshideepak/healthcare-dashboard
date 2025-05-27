import React from 'react'
import '../App.css'
import '../styles/typography.css'
import DashboardOverview from '../components/dashboardContents/dasboardOverview/DashboardOverview';
import ActivityFeed from '../components/dashboardContents/activityFeed/ActivityFeed';
import { ChevronDown } from 'lucide-react';
import CalendarView from '../components/dashboardContents/calendarView/CalendarView';
import UpcomingSchedule from '../components/dashboardContents/upcomingSchedule/UpcomingSchedule';

const Dashboard = () => {
  return (
    <div className='dashboard-main'>
      <div className='dashboard-overview-section'>
        <div className='dashboard-heading'>
          <h2>Dashboard</h2>
          <div className='dashboard-dropdown-icon'>
            <p className='text-xxs'>This Week </p>
            <ChevronDown width={15} height={15}/>
          </div>
        </div>
        <DashboardOverview/>
        <ActivityFeed/>
      </div>
      <div className='health-schedule-section'>
        <CalendarView/>
        <UpcomingSchedule/>
      </div>
    </div>
  )
}

export default Dashboard