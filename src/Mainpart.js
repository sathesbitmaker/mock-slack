import React from 'react';

const Mainpart = (props) => {
  return(
    <div>
      <div>
        {props.postAnnouncementsBody}
        {props.postCareersBody}
      </div>
    </div>
  );
}

export default Mainpart;
