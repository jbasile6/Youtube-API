import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar/SearchBar'
import VideoList from './components/VideoList/VideoList'

const key = "AIzaSyBQ_4obwuvJtXivzAqE-tRzirtLLm9n2JI";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: []
    };

    YTSearch({
      key: key,
      term:'Fordham Rugby'
    }, (videoList) => {
      this.setState({videoList })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>YOUTUBE API PROJECT</h1>
        <SearchBar />
        <VideoList
        videoData={this.state.videoList}
        />
      </div>
    );
  }

}

export default App;
