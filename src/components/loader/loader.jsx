import React from 'react';
import { Spinner } from 'react-bootstrap';
import './loader.css'

const loader = () => {
  return (
    <div className='fullscreen'>
      <div className='spinner'>
        <Spinner animation="border" variant="danger" size='L'/>
      </div>
    </div>
    
  )
};

export default loader;
