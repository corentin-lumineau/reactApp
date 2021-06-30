import React, { Component } from 'react';
import Gif from "./gif";

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />);
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
