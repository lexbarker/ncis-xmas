import React from 'react';
import file from '../../images/file.gif';

export const Gift = props => (
            <div className='card'>
            <img  alt='file image' src={file} />
            <p>day { props.pack.day } {props.pack.image } </p>
            </ div>
)
