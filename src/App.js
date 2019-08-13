import React, { Component } from 'react';
import Topbar from './Topbar.js';
import Sidebar from './Sidebar.js';
import Bottombar from './Bottombar.js'
import Mainpart from './Mainpart.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);
    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);

    this.state = {
      posts: [],
      newPostBody: '',
    }
  }

addPost() {
  const newState = Object.assign({}, this.state);
  newState.posts.push(this.state.newPostBody);
  newState.newPostBody = ''
  this.setState(newState);
}

handlePostEditorInputChange(ev) {
  this.setState({
    newPostBody: ev.target.value
  })
}

render() {
  return (
    <div className="App">
      {
        this.state.posts.map(postBody => {
        return (
          <Mainpart postBody={postBody}/>
        )
        })

      }
      <div>
      <textarea className="message-box" onChange={this.handlePostEditorInputChange}/>
      <button className="post-it" onClick={this.addPost}>Post</button>
      </div>

      <Topbar/>
      <Sidebar/>
    </div>
  );
}

}
export default App;
