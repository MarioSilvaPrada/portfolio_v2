import React, { FC } from 'react';
import './style.css';

const Spinner: FC = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className='loader' />
    </div>
  );
};

export default Spinner;
