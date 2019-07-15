import React, { Component } from "react";

class Drumpad extends Component {
  render() {
    let { letter, playSound, audio, id } = this.props;
    return (
      <div>
        <div onClick={playSound} id={id} className="drum-pad">
          <p>{letter}</p>
          <audio src={audio} className="clip" id={letter}></audio>
        </div>
        <p className="drum-title">{id}</p>
      </div>
    );
  }
}
export default Drumpad;
