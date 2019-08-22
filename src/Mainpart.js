import React from 'react';

const Mainpart = (props) => {
  return(
    <div id="allofit">
      <div id="announcementsMain">
        {props.postAnnouncementsBody}
      </div>
      <div id="careersMain">
      {props.postCareersBody}
      </div>
    </div>
  );
}

export default Mainpart;
