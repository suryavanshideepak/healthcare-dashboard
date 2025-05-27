import React from 'react';
import './AnatomySection.css'
import anatomyImage from '../../../assets/images/anatomy.png'

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img src={anatomyImage} alt="Anatomy" />
      <div className="indicator healthy" style={{ top: '22%', left: '0%' }}>❤️ Healthy Heart</div>
      <div className="indicator issue" style={{ top: '32%', left: '61%' }}>Weak Lungs</div>
      <div className="indicator healthy" style={{ top: '10%', left: '56%' }}>❤️ Healthy Teeth</div>
      <div className="indicator issue" style={{ top: '70%', left: '61%' }}>Weak Bone</div>
    </div>
  );
};

export default AnatomySection;