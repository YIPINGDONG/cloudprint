import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router'
import './App.css';
import _ from "lodash";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
const API_KEY ='AIzaSyBmNsWn9E4rQgKRqizqTkdFdoF6zPQoPhY';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
     const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>react youtube search</h2>
         
        </div>
        
         <button>
        <Link to="post/1">search and watch video</Link><hr/></button> 
        <button><Link to="query">How to use it</Link><hr/></button>
       <SearchBar onSearchTermChange={videoSearch} />
       search result: <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}/>
        
      </div>
    );
  }
}

export default App;