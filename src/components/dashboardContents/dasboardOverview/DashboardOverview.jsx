import React from 'react'
import './DashboardOverview.css'
import AnatomySection from '../anatomySection/AnatomySection'
import HealthStatusCards from '../healthStatusCard/HealthStatusCards'
import { statusCardsData } from '../../../data/healthData'

const DashboardOverview = () => {
  return (
    <section>
      <div className='anatomy-main'>
        <div className="overview-left">
            <AnatomySection />
        </div>
        <div className="overview-right">
            <HealthStatusCards data={statusCardsData}/>
        </div>
      </div>        
    </section>
  )
}

export default DashboardOverview