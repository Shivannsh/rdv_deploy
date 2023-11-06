import React from 'react';

import Row from 'react-bootstrap/Row';
import {events} from '../data'

import CardComp  from './card';

// import styles from './Shop.module.scss';

const GroupComp = () => {

  return (
   
      <div className='row-wrapper' style={{
        color: '#FFFFFF',
        background: '#16032E',
        backdropFilter: 'blur(1px)',
    }}>
        <Row style={{
            padding: '50px',
            alignItems: 'center'
        }}>
           {events.map(event => (
            <CardComp key={event.id} competition = {event} />
          ))}  
        </Row>
      </div>
    ) 
  
};

export default GroupComp;