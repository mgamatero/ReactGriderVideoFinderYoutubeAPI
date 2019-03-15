import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {

  state = {
    inputFromSearchBar: '',
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.getTermFromBar('Puppy Dog Pals');
  }

  getTermFromBar = (term) => {
    // console.log("From App, callback from SearchBar: "+ term)
    youtube.get('/search', {
      params: {
        q: term
      }
    }).then((response) => {
      console.log(response.data.items)
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0] //on new search, loads first vid on array
      })
    })
  };




  //Callback for Video
  onVideoSelect = (video) => {
    console.log("from app :", video);
    this.setState({ selectedVideo: video })
  }


  render() {
    return (
      <div className="ui container">
        <SearchBar getTermFromBar={this.getTermFromBar} />
        <div className="ui grid">
          <div className="row">
            <div className="twelve wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="four wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// AIzaSyDUw5ka5iPB8lxK5OBFL8jHHGTPlR2WOHQ