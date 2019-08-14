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
      newPostBody: ev.target.value
    });
  }

  createPost() {
    this.props.addPost(this.state.newPostBody);
    this.setState({
      name: 'Serge Ibaka',
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
