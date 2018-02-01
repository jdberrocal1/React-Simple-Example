import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const YT_API_KEY = 'AIzaSyDe8IQSt2vm58z1dkKunGqV93SFUeisiMQ';

// components
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('RC Cars');
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 500);
    return (
      <div>
        <SearchBar onSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

  videoSearch(term) {
    YTSearch({ key: YT_API_KEY, term: term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))