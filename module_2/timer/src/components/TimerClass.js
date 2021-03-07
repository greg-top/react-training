import React, {useState, useEffect} from 'react';
import './timer-class.css';

//komponent klasowy
class TimerClass extends React.Component {

    state = {
        seconds: 0
    }

    componentDidMount() {
        this.countSecs = setInterval(()=> {
        this.setState({seconds: this.state.seconds + 1});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countSecs);
    }

    render() {

        const {seconds} = this.state;

        return (
        <div className="timer-class__outer">
            <p className="timer-class__timer">Timer (komponent klasowy): {seconds}s</p>
        </div>
        );
    }
}

export default TimerClass;
