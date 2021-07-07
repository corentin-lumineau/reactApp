import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from "./gif";
import GifList from "./gif_list";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "2dQ3FMaMFccpi"
    };

    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

search = (query) => {
  giphy("PVySRT1RdvVN2WVGtusQUJasneyCU5jk").search({
    q: query,
    rating: 'g',
    limit: 3
  }, (err, res) => {
    this.setState({
      gifs: res.data
    });
  });
}

selectGif(id) {
  this.setState({
    selectedGifId: id
  });
  console.log(this.state);
}


render() {
  return (
    <div className="container">
      <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <Gif id={this.state.selectedGifId} />
      </div>
      <div className="right-scene">
        <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
      </div> 
    </div>
  );
}
}

export default App;
