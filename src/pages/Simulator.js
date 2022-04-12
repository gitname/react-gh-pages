import React, { Component } from 'react';
import './Simulator.css';
import Figure from 'react-bootstrap/Figure';

class Simulator extends Component {
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

    render(){
        return (
            <div class="sim">
                <h1>Simulator</h1>
                <div class="input-area">
                <input type="text" id="text-box" value={this.state.textBoxValue} onChange={(event) => this.updateTextBox(event.target.value)}/>
                <input type="submit" id="submit-button" value="Submit URL" onClick={(event) => this.handleChange(this.state.textBoxValue)} />
                </div>
                <svg id="colorblind-filters">
                    <defs>
                        <filter id="protanomaly">
                            <feColorMatrix in="SourceGraphic"
                                type="matrix"
                                values="0.817 0.183 0 0 0
                                    0.333 0.667 0 0 0
                                    0 0.125 0.875 0 0
                                    0 0 0 1 0" />
                        </filter>
                        <filter id="protanopia">
                            <feColorMatrix in="SourceGraphic"
                                type="matrix"
                                values="0.567 0.433 0 0 0
                                    0.558 0.442 0 0 0
                                    0 0.242 0.758 0 0 
                                    0 0 0 1 0"  />
                        </filter>
                        <filter id="deuteranomaly">
                            <feColorMatrix in="SourceGraphic"
                                type="matrix"
                                values="0.8 0.2 0 0 0
                                    0.258 0.742 0 0 0
                                    0 0.142 0.858 0 0
                                    0 0 0 1 0"  />
                        </filter>
                        <filter id="deuteranopia">
                            <feColorMatrix in="SourceGraphic"
                                type="matrix"
                                values="0.625 0.375 0 0 0
                                    0.7 0.3 0 0 0 
                                    0 0.3 0.7 0 0
                                    0 0 0 1 0" />
                        </filter>
                        <filter id="tritanomaly">
                            <feColorMatrix in="SourceGraphic"
                                type="matrix"
                                values="0.967 0.033 0 0 0
                                    0 0.733 0.267 0 0
                                    0 0.183 0.817 0 0
                                    0 0 0 1 0"  />
                        </filter>
                        <filter id="tritanopia">
                            <feColorMatrix in="SourceGraphic"
                                type="matrix"
                                values="0.95 0.05 0 0 0
                                    0 0.433 0.567 0 0
                                    0 0.475 0.525 0 0
                                    0 0 0 1 0"  />
                        </filter>
                        <filter id="achromatomaly">
                            <feColorMatrix in="SourceGraphic"
                                type="matrix"
                                values="0.618 0.320 0.062 0 0
                                    0.163 0.775 0.062 0 0
                                    0.163 0.320 0.516 0 0
                                    0 0 0 1 0"  />
                        </filter>
                        <filter id="achromatopsia">
                            <feColorMatrix in="SourceGraphic"
                                type="matrix"
                                values="0.299 0.587 0.114 0 0
                                    0.299 0.587 0.114 0 0
                                    0.299 0.587 0.114 0 0
                                    0 0 0 1 0"  />
                        </filter>
                    </defs>
                </svg>
                <div id="gallery">
                    <Figure>
                        <Figure.Image id="normalImg" src={this.state.imgSrc} alt="Uploaded normal image" width={300} height={300} />
                        <Figure.Caption>Normal</Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image id="protanomaly" src={this.state.imgSrc} class="img--protanomaly" alt="Uploaded normal image" width={300} height={300} />
                        <Figure.Caption>protanomaly</Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image id="protanopia" src={this.state.imgSrc} class="img--protanopia" alt="Uploaded normal image" width={300} height={300} />
                        <Figure.Caption>protanopia</Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image id="deuteranomaly" src={this.state.imgSrc} class="img--deuteranomaly" alt="Uploaded normal image" width={300} height={300} />
                        <Figure.Caption>deuteranomaly</Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image id="deuteranopia" src={this.state.imgSrc} class="img--deuteranopia" alt="Uploaded normal image" width={300} height={300} />
                        <Figure.Caption>deuteranopia</Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image id="tritanomaly" src={this.state.imgSrc} class="img--tritanomaly" alt="Uploaded normal image" width={300} height={300} />
                        <Figure.Caption>tritanomaly</Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image id="tritanopia" src={this.state.imgSrc} class="img--tritanopia" alt="Uploaded normal image" width={300} height={300} />
                        <Figure.Caption>tritanopia</Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image id="achromatomaly" src={this.state.imgSrc} class="img--achromatomaly" alt="Uploaded normal image" width={300} height={300} />
                        <Figure.Caption>achromatomaly</Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image id="achromatopsia" src={this.state.imgSrc} class="img--achromatopsia" alt="Uploaded normal image" width={300} height={300} />
                        <Figure.Caption>achromatopsia</Figure.Caption>
                    </Figure>
                </div>


            </div>
        );
    }
    
}
export default Simulator;
