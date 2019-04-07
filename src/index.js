import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_item_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyBgWEQ_Fbc4NW36c_Re03wf9FSw_MH5P44';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      videos : [],
      selectedVideo : null
    };
    this.videoSearch("Metallica");
  }

  videoSearch = (searchTerm) =>{
    YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
      this.setState(
        {
          videos : videos,
          selectedVideo : videos[0]
        });
    });
  }
  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}
//put the created component into dom
ReactDOM.render(<App />, document.querySelector('.container'));
