import React from 'react';

const Sidebar = () => {

  function changeForum() {
    console.log('ok')
  }

  const numbers = [0,1,2,3,4,5,6,7]
  const listnames = ['#announcements','#careers','#coding','#contact-staff','#design','#digital-marketing'
  ,'#events','#random']
  return(
    <div className="sidebarWhole">
    <h1> Mock Slack </h1>
    <h1> Threads </h1>
    <h1> Channels </h1>

      {
        numbers.map(i => {
        return (
          <div>
          <h4 onClick={changeForum}>{listnames[i]}</h4>
        </div>
        )
        })}

    <h1> Direct Messages </h1>
    </div>
  );
}

export default Sidebar;
