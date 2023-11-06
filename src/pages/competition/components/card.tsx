import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Card } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';


const CardComp = ({competition}:any) =>{ 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
    <>
  <Col xs={12} md={6} lg={3} key={competition.id} style={{
    alignContent:'center'
  }}>
    <Card style={{ width: '14rem',
        color: '#FFFFFF',
        background: '#00191E',
        backdropFilter: 'blur(1px)'}}>
      <Card.Img variant="top" src={competition.image} />
      {/* <Card.Body>
        <Card.Title>{competition.title}</Card.Title>
        <Card.Text>
          {competition.content}
        </Card.Text>
        
      </Card.Body> */}
    </Card>
    <Button variant="danger" onClick={handleShow} style ={{
        marginBottom:'15%',
        width:'14rem'
    }}>Register</Button>
  </Col>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{competition.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card.Img variant="top" src={competition.image} /> 
          {competition.content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger">Register</Button>
        </Modal.Footer>
      </Modal>
  </>
  
)}

export default CardComp;