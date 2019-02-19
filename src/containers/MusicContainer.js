import React from 'react';
import SongsSelector from '../components/SongsSelector';
import SongsDetail from '../components/SongsDetail';

class MusicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data})
    });

    request.send();
  }

  handleSongSelected(index) {
    const selectedSong = this.state.songs[index];
    this.setState({currentSong: selectedSong})
  }

  render () {
    return (
      <div>
        <h2>Songs Container</h2>
        <SongsSelector songs={this.state.songs} onSongSelected={this.handleSongSelected} />
        <SongsDetail song={this.state.currentSong} />
      </div>
    );
  }
}

export default MusicContainer;
