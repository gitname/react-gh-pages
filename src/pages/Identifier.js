import React, { Component } from 'react';
import './Identifier.css';


class Identifier extends Component {
    constructor() {
        super();
        this.state = {
            imgSrc: 'https://laura.rochaprado.com/color-blind-simulator/img/conical-gradient.png',
            textBoxValue: 'Enter image URL'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
            imgSrc: value
        });
    }

    updateTextBox(value) {
        this.setState({
            textBoxValue: value
        });
    }   

    render() {
        return (
            <div class="identifier">
                <h1>Color Identifier</h1>
                <div class="input-area">
                    <input type="text" id="text-box" value={this.state.textBoxValue} onChange={(event) => this.updateTextBox(event.target.value)} />
                    <input type="submit" id="submit-button" value="Submit URL" onClick={(event) => this.handleChange(this.state.textBoxValue)} />
                </div>
                <div>
                    <br></br><br></br>
                    <img src={this.state.imgSrc} width={500} height={500} objectFit={'scale-down'} />
                </div>
                <br></br><br></br>
                <div>
                    <button id="start-button">Find Color</button>
                    <span id="result"></span>
                </div>
            </div>
        );
    }

    document.getElementById('start-button').addEventListener('click', () =>{
        const resultElement = document.getElementById('result');
      
        if (!window.EyeDropper) {
          resultElement.textContent = 'Your browser does not support the EyeDropper API';
          return;
        }
      
        const eyeDropper = new EyeDropper();
      
        eyeDropper.open().then(result => {
          resultElement.textContent = result.sRGBHex;
          resultElement.style.backgroundColor = result.sRGBHex;
        }).catch(e => {
          resultElement.textContent = e;
        });

      });
      

}
export default Identifier;
