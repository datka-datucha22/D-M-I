import { useState } from 'react';
import React, { useContext } from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function BookCard() {
    const Data = require('../../data.json')
    const [info, setInfo] = useState(Data)

    console.log(info.length);
    return (
        <div className='book-card'>
            <Container style={{ marginTop: '100px' }}>
                <Row>
                    {info.slice(info.length - 5).map((item) =>
                        <Col xs={4} className="shadow p-3 mb-5 bg-body rounded" key={item.id}>
                            <Card border='info'>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body style={{ backgroundColor: '#06aed5', }}>
                                    <Card.Title style={{ color: '#086788' }}  >{item.name}</Card.Title>
                                    <Card.Text style={{ color: '#f2f4f3' }} >{item.price}$</Card.Text>
                                    <Card.Text className="opacity-75"></Card.Text>
                                    <Link to={``}><Button style={{ color: '#f2f4f3' }} variant="outline-primary">Go to menu</Button>{' '}</Link >
                                    <Link to={`/${item.id}`}><Button variant="success">See More</Button>{' '}</Link >
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}
