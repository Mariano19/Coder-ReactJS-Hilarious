import React from 'react';
import { Spinner } from 'react-bootstrap';
import './loader.css'

const loader = () => {
  return <div className='spinner'>
      <Spinner animation="border" variant="secondary"/>

  </div>;
};

export default loader;
