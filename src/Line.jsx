import React from 'react';
import './Line.css'


class Line extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            translation: 0,
            date: new Date
        }
    }

    tick() {
        this.setState({
            date: new Date,
        })
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            10000
        );
    }

    render() {
        return (

            <div>

            <svg width="628" height="700" xmlns="http://www.w3.org/2000/svg">
                <line x1={this.state.translation} y1="0" x2={this.state.translation} y2="700" stroke="black" />
                <text></text>
            </svg>
                <p>{ Math.round(this.state.date.getSeconds()/60 + this.state.date.getMinutes() + this.state.date.getHours()*60) }</p>
            </div>
            // 470 - 840
        );
    }
    
}

export default Line;