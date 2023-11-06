import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Card } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import { API_BASE, getJWT } from '../../../utils/api';
import { GCAPTCHA_SITE_KEY } from '../../../utils/api';
const CardPro = ({ pronite }: any) => {
  
  

  

  return (
    <>
      <Col xs={12} md={5} lg={3} key={pronite.id} style={{
        alignContent: 'center',
        justifyContent: 'center',
        display: 'grid',
        marginTop: '3rem',
        padding: '0'
      }}>
        <Card style={{
          width: '14rem',
          color: '#FFFFFF',
          background: '#00191E',
          backdropFilter: 'blur(1px)'
        }}>
          <Card.Img variant="top" src={pronite.image} />
        </Card>
        {pronite.active ? (
          <div>
            <Button variant="primary"  style={{
              marginTop: '10%',
              marginBottom: '15%',
              width: '14rem',
              background: '#efc36a',
              color: '#210028',
              border: 'none',
              borderRadius: '0.3rem',
            }}><strong>LIVE</strong></Button>
            

          </div>
        ) : (
          <Button variant="primary" style={{
            marginTop: '10%',
            marginBottom: '15%',
            width: '14rem',
            background: '#aaa9ad',
            color: '#210028',
            border: 'none',
            borderRadius: '0.3rem',
          }}><strong>Coming Soon</strong></Button>
        )

        }


        {/* <Card style={{
          width: '14rem',
          alignItems: 'center',
          color: '#FFFFFF',
          background: '#16032E',
          backdropFilter: 'blur(1px)'
        }}>
          <Card.Img variant="top" src={pronite.sponser} style={{
            width: '6rem',

          }} />
          <Card.Header style={{
            paddingTop: '30px',
            color: "#efc36a",
            fontSize: '1.3rem',
          }}>{pronite.sponsertitle}</Card.Header>
        </Card> */}
      </Col>

    </>

  )
}

export default CardPro;
