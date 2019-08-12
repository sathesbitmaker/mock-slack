import React from 'react';
import Star from './star.png';

const Topbar = () => {
  return(
    <div>
    <h1> #announcments </h1>
    <img src={Star} alt="Star" />;
    <h1> Listen to all important announcments here! </h1>
    </div>
  );
}

export default Topbar;
