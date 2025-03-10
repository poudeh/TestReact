import PropTypes from 'prop-types'
import React, { Component } from 'react'
var interval;

export default class timer extends Component {

    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
            initialTime: new Date(),
            intervalRunning: false,  // Track whether the interval is running
        };
        this.handleSetTitle = this.handleSetTitle.bind(this);

    }
    componentDidMount() {
        console.log('componentDidMount');
        // Initial interval setup (for continuous time updates)
        this.startInterval();
      }
    
      componentDidUpdate() {
        if (this.state.time === '8:39:59 pm') {
          clearInterval(interval);
        }
      }
    
      componentWillUnmount() {
        clearInterval(interval); // Clean up the interval when the component unmounts
      }
    
      handleSetTitle = () => {
        this.setState({
          title: 'Hello night',
        });
      };
    
      // Add time: Add one minute to the current time
      addTime = () => {
        const currentTime = new Date(this.state.time);
        currentTime.setMinutes(currentTime.getMinutes() + 1);
        this.setState({
          time: currentTime.toLocaleTimeString(),
        });
    
        // Start interval if it's not running
        if (!this.state.intervalRunning) {
          this.startInterval();
        }
      };
    
      resetTimer = () => {
        this.setState({
          time: this.state.initialTime.toLocaleTimeString(),
        });
    
        // Start interval if it's not running
        if (!this.state.intervalRunning) {
          this.startInterval();
        }
      };
    
      minusTime = () => {
        const currentTime = new Date(this.state.time);
        currentTime.setMinutes(currentTime.getMinutes() - 1);
        this.setState({
          time: currentTime.toLocaleTimeString(),
        });
    
        // Start interval if it's not running
        if (!this.state.intervalRunning) {
          this.startInterval();
        }
      };
    
      // Start interval to update the time every second
      startInterval = () => {
        interval = setInterval(() => {
          this.setState({
            time: new Date().toLocaleTimeString(),
          });
        }, 1000);
        this.setState({ intervalRunning: true }); // Update state to indicate interval is running
      };
    
      // Stop the interval
      stopInterval = () => {
        clearInterval(interval);
        this.setState({ intervalRunning: false }); // Update state to indicate interval has stopped
      };
    

    render() {
        return (
            <>
            <banner header={'Hello world'} setTitleFunc={this.handleSetTitle} />
            <h2 className='timer'>It is {this.state.time}</h2>
            <button onClick={this.addTime}>Add time</button>
            <button onClick={this.resetTimer}>Reset Timer</button>
            <button onClick={this.minusTime}>Minus time</button>
            <button onClick={this.stopInterval}>Stop Interval</button> {/* New button to stop the interval */}
          </>        )
    }
}
