import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
// import Divider from '../../../components/divider';
import { bookedPasses } from '../../../utils/api';

interface IPass {
    _id: string;
    code: string;
    bookTime: string;
    entryTime: string | undefined;
    slot: {
        name: string;
        description: string;
    };
    pronite: {
        name: string;
        description: string;
    };
    nft: {
        link: string;
        item: string;
    };
}
const example = [{
    _id: "12345",
    code: "PASS123",
    bookTime: "2023-10-02T10:00:00",
    entryTime: "2023-10-02T20:00:00",
    slot: {
        name: "Slot A",
        description: "Morning Session"
    },
    pronite: {
        name: "Concert Night",
        description: "Live Music Performance"
    },
    nft: {
        link: "https://example.com/nft",
        item: "NFT123"
    }
},
{
    _id: "12345",
    code: "PASS123",
    bookTime: "2023-10-02T10:00:00",
    entryTime: "2023-10-02T20:00:00",
    slot: {
        name: "Slot A",
        description: "Morning Session"
    },
    pronite: {
        name: "Concert Night",
        description: "Live Music Performance"
    },
    nft: {
        link: "https://example.com/nft",
        item: "NFT123"
    }
},
{
    _id: "12345",
    code: "PASS123",
    bookTime: "2023-10-02T10:00:00",
    entryTime: "2023-10-02T20:00:00",
    slot: {
        name: "Slot A",
        description: "Morning Session"
    },
    pronite: {
        name: "Concert Night",
        description: "Live Music Performance"
    },
    nft: {
        link: "https://example.com/nft",
        item: "NFT123"
    }
},
{
    _id: "12345",
    code: "PASS123",
    bookTime: "2023-10-02T10:00:00",
    entryTime: "2023-10-02T20:00:00",
    slot: {
        name: "Slot A",
        description: "Morning Session"
    },
    pronite: {
        name: "Concert Night",
        description: "Live Music Performance"
    },
    nft: {
        link: "https://example.com/nft",
        item: "NFT123"
    }
},

]


function BookedPasses() {
    const [passes, setPasses] = useState<IPass[]>([]);
    useEffect(() => {
        bookedPasses().then((d) => {
            if (d.error) return window.alert(d.response);
            setPasses(d.response);
        });
    }, []);

    return (
        <Container className='p-0 mb-4 card-comp'>
            <Card style={{ backgroundColor: '#0a001b' }}>
                <Card.Body>
                    <h3 style={{ color: '#fff' }}>
                        <center>Booked Passes</center>
                    </h3>

                    {passes.length === 0 ? (
                        <div className='text-white text-center text-mute mt-3'>You have not booked any pronite passes yet</div>
                    ) : (
                        <Row className='text-center mt-3'>
                            {passes.map((p) => (
                                <Col>
                                    <Card className='m-2 p-0 border-dark'>
                                        <Card.Header className='bg-t2 text-black pass-header'>{p.pronite.name}</Card.Header>
                                        <Card.Body className=''>
                                            <Card.Text>{p.pronite.description}</Card.Text>
                                            {p.nft.link ? (
                                                <Button
                                                    variant='dark'
                                                    className='dwnld rdv-hover'
                                                    onClick={() => window.open(p.nft.link)}
                                                >
                                                    Download
                                                </Button>
                                            ) : (
                                                <></>
                                            )}
                                        </Card.Body>
                                        <Card.Footer className='pass-footer'>
                                            {p.entryTime
                                                ? `Entered at ${new Date(p.entryTime).toLocaleString()}`
                                                : `Booked at ${new Date(p.bookTime).toLocaleString()}`}
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BookedPasses;