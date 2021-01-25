// Dependencies
import React from 'react';
import Tesseract from 'tesseract.js';

// Visuals
import './App.css';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

// Components
import Holder from './holder.js';

// Application Main
class App extends React.Component {

  // State for Text Recognition
  constructor() {
    super();
    this.state = { image: null }
  }

  // Effects
  async componentDidMount() {
    M.AutoInit();
  }

  // Image Helper Utility
  imageHelper = async () => {

    const img = document.getElementById('imageInput').files[0];
    const url = URL.createObjectURL(img);

    M.toast({ html: 'Execution Started! This may take a while' });

    // Check Completion Status in console
    await Tesseract.recognize(url, 'eng',
      { logger: m => console.log(m) }
    )
      .then(({ data: { text } }) => {

        // Update App State Accordingly
        this.setState({ image: text });
        M.toast({ html: 'Execution Successful' })

      });

  }

  render() {
    return (
      <>

        <nav className="nav-extended purple darken-4">
          <div className="nav-wrapper">
            <span className="brand-logo center">Receipt Scanner</span>
          </div>
        </nav>

        <div id="image">
          <br />
          <Holder text={this.state.image} altText={"Tap the shutter to Get Started!"} />

          <input type="file" accept="image/*" id="imageInput" capture style={{
            display: "none",
            visibility: "hidden"
          }} onChange={this.imageHelper} />

          <div className="fixed-action-btn">
            <a id='imageButton' className="btn-floating btn-large purple" onClick={
              () => document.getElementById('imageInput').click()
            }>
              <i className="large material-icons">camera</i>
            </a>
          </div>

        </div>

      </>
    );
  }
}

export default App;
