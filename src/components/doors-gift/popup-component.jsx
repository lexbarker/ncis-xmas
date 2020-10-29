import React from 'react';
import '../popup/popup-styles.css';
import image1  from '../../images/xmas.jpg';
import image2  from '../../images/eini1.jpg';


class Popup extends React.Component {  
    render() {  
  return (  
  <div className='popup'>  
  <div className='popup_inner'> 
  <div className='button'>
  <button onClick={this.props.closePopup}>close me</button>
  </div>
  <img className='img' src={image1} />
  </div>  
  </div>  
  );  
  }  
  }  
  
  export default Popup;