import React from 'react';

import Row from 'react-bootstrap/Row';
import {competitions} from '../data'

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
           {competitions.map(competition => (
            <CardComp key={competition.id} competition = {competition} />
          ))}  
        </Row>
      </div>
    ) 
  
};

export default GroupComp;