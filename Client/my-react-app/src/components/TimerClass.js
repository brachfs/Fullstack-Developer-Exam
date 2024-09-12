import React, { Component } from 'react';

class TimerClass extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h2>Timer: {this.state.seconds} seconds</h2>
            </div>
        );
    }
}

export default TimerClass;
