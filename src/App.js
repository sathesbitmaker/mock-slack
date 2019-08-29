import React, { Component } from 'react';
import Bottombar from './Bottombar.js'
import Mainpart from './Mainpart.js'
import './App.css';
import Modal from "./Modal";
import useModal from './useModal';

const ModalButton = () => {
  const {isShowing, toggle} = useModal();
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

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
       <ModalButton />
    </div>
  );
}
}

export default App;
