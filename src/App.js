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


    this.state = {
      announcementsposts: [],
    }
  }

addPost(newPostBody) {
  const newState = Object.assign({}, this.state);
  newState.announcementsposts.push(newPostBody);
  this.setState(newState);
}



render() {
  return (
    <div className="App">
      <div>
      {
        this.state.announcementsposts.map(postBody => {
        return (
          <Mainpart postBody={postBody}/>
        )
        })

      }
    </div>
      <Bottombar addPost={this.addPost}/>
    </div>
  );
}

}
export default App;
