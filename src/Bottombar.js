import React, { Component } from 'react';

class Bottombar extends Component {
  constructor(props) {
    super(props);

  this.handlePostEditorInputChangeAnnouncements = this.handlePostEditorInputChangeAnnouncements.bind(this);
  this.handlePostEditorInputChangeCareers = this.handlePostEditorInputChangeCareers.bind(this);
  this.createAnnouncementsPost = this.createAnnouncementsPost.bind(this);
  this.createCareersPost = this.createCareersPost.bind(this);
  this.announcementsDisplay = this.announcementsDisplay.bind(this);
  this.ok = this.ok.bind(this);

  this.state = {
    announcementsBody: '',
    announcementsShow: false,
    careersBody: '',
    careersID: 'careers',
  };
}

  handlePostEditorInputChangeAnnouncements(ev) {
    this.setState({
      nameTime: ['Serge Ibaka     ', new Date().getHours(), ':', new Date().getMinutes()],
      announcementsBody: ev.target.value,
    });
  }

  handlePostEditorInputChangeCareers(ev) {
    this.setState({
      nameTime: ['Serge Ibaka     ', new Date().getHours(), ':', new Date().getMinutes()],
      careersBody: ev.target.value,
    });
  }

  createAnnouncementsPost() {
    this.props.addPostAnnouncements(this.state.nameTime)
    this.props.addPostAnnouncements(this.state.announcementsBody);
    this.setState({
      announcementsBody: '',
      backgroundColor: 'yellow'
    });
  }

  createCareersPost() {
    this.props.addPostCareers(this.state.nameTime)
    this.props.addPostCareers(this.state.careersBody)
    this.setState({
      careersBody: ''
    });
  }

  announcementsDisplay() {
    this.setState({
      announcementsShow: true
    });
  }

  ok() {
    var ok = this.id
    console.log(ok)

  }


  render() {
  return(
    <div>
      <div className="sidebarWhole">
        <h1> Mock Slack </h1>
        <h1> Threads </h1>
        <h1> Channels </h1>

            <div>
              <h4 id="announcementsSide" onClick={this.announcementsDisplay}>#announcements</h4>
              <h4  id={this.state.careersID}  onClick={this.ok}>#careers</h4>
              <h4 id="codingSide">#coding</h4>
            </div>

          <h1> Direct Messages </h1>
      </div>
    <textarea className="message-box" value={this.state.post} onChange={this.handlePostEditorInputChangeAnnouncements}/>
    <button className="post-it" onClick={this.createAnnouncementsPost}>Post</button>
      <textarea className="message-box" value={this.state.post} onChange={this.handlePostEditorInputChangeCareers}/>
      <button className="post-it" onClick={this.createCareersPost}>Post</button>
    </div>
  );
}
}

export default Bottombar;
