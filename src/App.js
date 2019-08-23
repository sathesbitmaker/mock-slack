import React, { Component } from 'react';
import Bottombar from './Bottombar.js'
import Mainpart from './Mainpart.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.addPostAnnouncements = this.addPostAnnouncements.bind(this);
    this.addPostCareers = this.addPostCareers.bind(this);

    this.state = {
      announcementsposts: [],
      careersposts: [],
    }
  }

addPostAnnouncements(announcementsBody) {
  const newAnnouncementsState = Object.assign({}, this.state);
  newAnnouncementsState.announcementsposts.push(announcementsBody);
  this.setState(newAnnouncementsState);
}

addPostCareers(careersBody) {
  const newCareersState = Object.assign({}, this.state);
  newCareersState.careersposts.push(careersBody);
  this.setState(newCareersState);
}

render() {
  return (
    <div className="App">
      <div id="announcmentsPosts">
      {
        this.state.announcementsposts.map(postAnnouncementsBody => {
        return (
          <Mainpart postAnnouncementsBody={postAnnouncementsBody}/>
        )
        })

      }
      {
        this.state.careersposts.map(postCareersBody => {
        return (
          <Mainpart postCareersBody={postCareersBody}/>
        )
        })

      }

    </div>
      <Bottombar addPostAnnouncements={this.addPostAnnouncements}
                 addPostCareers={this.addPostCareers}
         />
    </div>
  );
}

}
export default App;
