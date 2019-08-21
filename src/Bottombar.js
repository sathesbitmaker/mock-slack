import React, { Component } from 'react';

class Bottombar extends Component {
  constructor(props) {
    super(props);

  this.handlePostEditorInputChangeAnnouncements = this.handlePostEditorInputChangeAnnouncements.bind(this);
  this.handlePostEditorInputChangeCareers = this.handlePostEditorInputChangeCareers.bind(this);
  this.createAnnouncementsPost = this.createAnnouncementsPost.bind(this)
  this.createCareersPost = this.createCareersPost.bind(this)
  this.displayPosts = this.displayPosts.bind(this)

  this.state = {
    announcementsBody: '',
    careersBody: '',
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
      announcementsBody: ''
    });
  }

  createCareersPost() {
    this.props.addPostCareers(this.state.nameTime)
    this.props.addPostCareers(this.state.careersBody)
    this.setState({
      careersBody: ''
    });
  }

  displayPosts({currentTarget}) {
    console.log(currentTarget.id)
  }


  render() {
    const numbers = [0,1,2,3,4,5,6,7]
    const listnames = ['announcements','careers','coding','contact-staff','design','digital-marketing'
    ,'events','random']
  return(
    <div>
      <div className="sidebarWhole">
      <h1> Mock Slack </h1>
      <h1> Threads </h1>
      <h1> Channels </h1>

        {
          numbers.map(i => {
          return (
            <div>
            <h4 onClick={this.changeForum} id={listnames[i]} onClick={this.displayPosts}>#{listnames[i]}</h4>
          </div>
          )
          })}

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
