import React, { Component } from 'react';
import Homebutton from '../home-button/home-button-component';
import Popup from './popup-component'
import './popup-styles.css';


class popup extends Component {  

    constructor(props){  
  super(props);  
  this.state = { showPopup: false };  
  }  
  
    togglePopup() {  
  this.setState({  
       showPopup: !this.state.showPopup  
  });  
   }  
  
    render() {  
        return(
  <div>  
    <div>
        <h1>POP UP page</h1>
        <Homebutton />
    </div>
  <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>  
  
  {this.state.showPopup ?  
  <Popup  
            text='Click "Close Button" to hide popup'  
            closePopup={this.togglePopup.bind(this)}  
  />  
  : null  
  }  
  </div>  
  
        );
  }}

  export default popup;