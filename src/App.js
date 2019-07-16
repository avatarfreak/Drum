import React, { Component } from "react";
import "./App.css";
import n2d from "./n2d.png";
import samples from "./components/Samples";
import Drumpad from "./components/Drumpad";
import Footer from "./components/Footer";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: "Make some noise."
    };

    this.playSound = this.playSound.bind(this);
  }
  drumDetails(arg) {
    return samples.filter(items => arg === items.id)[0];
  }

  componentDidMount() {
    document.addEventListener("keydown", e => {
      let data = this.drumDetails(e.key.toUpperCase());
      if (data !== undefined) {
        this.playAudio(data.id, data.name);
        //fetching parent div of audio tag
        let drumActive = document.getElementById(data.name);
        //visual changing background color of press key
        drumActive.classList.add("active");
        //Resetting to background color
        setTimeout(() => drumActive.classList.remove("active"), 100);
      }
    });
  }

  playSound(e) {
    //Getting Letter :eg Q, W, R
    let drumKey = this.drumDetails(e.target.innerText);
    //calling PlayAudio func
    this.playAudio(drumKey.id, drumKey.name);
  }

  playAudio(key, name) {
    //Target HTML Audio tag by id
    let audio = document.getElementById(key);
    audio.currentTime = 0;

    //play() is inbuilt func to play audio
    audio.play();

    //updating the drum sound name
    this.setState({ sounds: name });
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <div className="App-header">
          <img src={n2d} className="App-logo" alt="logo" />
        </div>
        <div id="display">
          <h3>{this.state.sounds}</h3>
        </div>
        <div className="drum__pad">
          {samples.map((drum, idx) => (
            <Drumpad
              key={idx}
              id={drum.name}
              letter={drum.id}
              audio={drum.sound}
              playSound={this.playSound}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
