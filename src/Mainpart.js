import React, { Component } from 'react';

class Mainpart extends Component {

  
  render () {
    var props = this.props;
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
}

export default Mainpart;
