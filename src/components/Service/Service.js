import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img } = service;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/servicedetails/${id}`}>
                        <button className="btn btn-primary">{name} details</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;