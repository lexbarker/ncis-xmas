import React, { Component } from 'react';
import './clocks.styles.css';

class Clocks extends React.Component {
    constructor () {
        super();
        this.state = {
            dtg: new Date().toString(),
            time: new Date(),
            washingtonttime: ""

        };
    }
        componentDidMount() {
            this.intervalID = setInterval(
              () => this.tick(),
              1000
            );
          }
          componentWillUnmount() {
            clearInterval(this.intervalID);
          }
          tick() {
            this.setState({
              time: new Date(),
              dtg: new Date().toString(),
              washingtontime: this.state.time.toLocaleString('en-US', { timeZone: 'America/New_York' }),
              latime: this.state.time.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }),
              orleanstime: this.state.time.toLocaleString('en-US', { timeZone: 'America/Chicago' }),
              gitmotime: new Date().toLocaleString('en-US', { timeZone: 'cuba' }),
              })
            };

        
        render() {
         
            
            return (
            <div>
            
            <div className='clocks'>
            <clockrow>NCIS Washington Time</clockrow>
            <clockrow>{ this.state.washingtontime }</clockrow>
            <clockrow>NCIS Los Angeles Time</clockrow>
            <clockrow>{this.state.latime}</clockrow>
            <clockrow>NCIS New Orleans Time</clockrow>
            <clockrow>{this.state.orleanstime}</clockrow>
            <clockrow>NCIS GTMO Time</clockrow>
            <clockrow>{this.state.gitmotime}</clockrow>
            </ div>
            </div>

            
    )}
  }

export {Clocks}