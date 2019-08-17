import React, { Component } from 'react';

class Bottombar extends Component {
  constructor(props) {
    super(props);

  this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
  this.createPost = this.createPost.bind(this)

  this.state = {
    newPostBody: '',
  };
}

  changeForum() {
    console.log('ok')
  }

  handlePostEditorInputChange(ev) {
    this.setState({
      nameTime: ['Serge Ibaka     ', new Date().getHours(), ':', new Date().getMinutes()],
      newPostBody: ev.target.value
    });
  }

  createPost() {
    this.props.addPost(this.state.nameTime)
    this.props.addPost(this.state.newPostBody);
    this.setState({
      newPostBody: ''
    });
  }

  render() {
    const numbers = [0,1,2,3,4,5,6,7]
    const listnames = ['#announcements','#careers','#coding','#contact-staff','#design','#digital-marketing'
    ,'#events','#random']
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
            <h4 onClick={this.changeForum}>{listnames[i]}</h4>
          </div>
          )
          })}

      <h1> Direct Messages </h1>
    </div>
    <textarea className="message-box" value={this.state.newPostBody}onChange={this.handlePostEditorInputChange}/>
    <button className="post-it" onClick={this.createPost}>Post</button>
    </div>
  );
}
}

export default Bottombar;
