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
      hours: 'ok',
      newPostBody: ''
    });
  }

  render() {
  return(
    <div>
    <textarea className="message-box" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange}/>
    <button className="post-it" onClick={this.createPost}>Post</button>
    </div>
  );
}
}

export default Bottombar;
