import React from 'react';


const Sidebar = () => {
  const numbers = [0,1,2,3,4,5,6,7]
  const listnames = ['#announcements','#careers','#coding','#contact-staff','#design','#digital-marketing'
  ,'#events','#random']
  return(
    <div>
    <h1> Mock Slack </h1>
    <h1> Threads </h1>
    <h1> Channels </h1>
    <div>
      {
        numbers.map(i => {
        return (
          <p>{listnames[i]}</p>
        )
        })

      }
    </div>
    <h1> Direct Messages </h1>
    </div>
  );
}

export default Sidebar;
