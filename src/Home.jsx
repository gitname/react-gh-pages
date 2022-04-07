import './App.css';
import React from 'react';
import logo from './logo.svg';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div class="main">
                <img src={require("./components/eye.png")} width={100} height={100} />
                <h1>Color blindness affects millions of people around the world.</h1>
                <h2>How often do we consider this when building new interfaces and technologies?</h2>
                <p>
                    Here are some quick statistics:
                    <ul class="stat-list">
                        <li>1 in 12 men and 1 in 200 women in the world are affected by color blindness</li>
                        <li>Approximately 300 million people are colorblind worldwide, approximately 13 million in the US</li>
                        <li>Color vision deficiency ranges from mild to severe</li>
                        <ul>
                            <li>Minor cases where the individual doesn't know they have color blindness</li>
                            <li>Severe cases where the individual experiences problems in everyday life</li>
                        </ul>
                        <li>Types of color blindness</li>
                        <ul>
                            <li>Red-Green color blindness (most common) - hard to tell the difference between red and green</li>
                            <li>Blue-Yellow color blindness - hard to tell the difference between blue and green</li>
                            <li>Complete color blindness (least common) - cannot see colors at all</li>
                        </ul>
                    </ul>
                </p>

            </div>
        );
    }

}

export default Home;