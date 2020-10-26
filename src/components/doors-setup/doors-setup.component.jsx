import React, { Component } from 'react';
import { Gift } from  '../doors-gift/doors-gift.component'
import './doors-setup.styles.css';
import '../doors-gift/doors-gift.styles.css';
import xmasbg from '../../images/xmas.jpg';
import file from '../../images/file.gif';

class DoorsSetup extends Component {
    constructor() {
        super();
        this.state = {
            theday: new Date().getDate(),
            themonth: new Date().getMonth(),
            gifts: [
                {id:'1', day:'1', image:"w"},
                {id:'2', day:'2', image:"w"},
                {id:'3', day:'3', image:"w"},
                {id:'4', day:'4', image:"w"},
                {id:'5', day:'5', image:"w"}
            ]
        };
    }
    render() {
        console.log("checkpoint1")
        console.log(this.state.gifts.length);
        //const gifts = this.state.gifts;
        console.log(this.state.theday)
        console.log(this.state.gifts)
        
        return(
            
            <div>
                <img className='background' alt='xmas background' src={xmasbg} />
                <div className='cardgrid'> 
                
                
                { this.state.gifts.map(gift => (
                  <Gift key={ gift.id } pack={ gift }  />
                  ))}

                </ div>
                
                
            </div>
        )
    }
}

export {DoorsSetup}