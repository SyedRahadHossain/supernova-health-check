import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import equipments from "../../images/equipments.jpg"

const About = () => {
    return (
        <div className="container">
            <div className="row my-5 border rounded shadow">
                <div className="col-md-6">
                    <img className="img-fluid" src={equipments} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="p-4">
                        <h3 className="text-primary">About us</h3>
                        <h5>Supernova is committed to render the possible standard service to the people of the country at an affordable cost. This will definitely reduce the burden of the government and will make the path of "Health for all".</h5>
                        <p>
                            Supernova health check is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes which started its activities in 1983. This is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.

                            LEGAL STATUS Supernova is a private limited company registered with the Ministry of Health & Family Welfare.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="mb-4 text-primary">Our Doctors</h2>
            {/* card */}
            <CardGroup className="mb-5 shadow">
                <Card className="">
                    <Card.Img style={{ height: "400px" }}
                        className="instructor-img"
                        variant="top"
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                        <Card.Title>Tom Charley</Card.Title>
                        <Card.Text>Radiologist</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        style={{ height: "400px" }}
                        className="instructor-img"
                        variant="top"
                        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                        <Card.Title>James Fardinand</Card.Title>
                        <Card.Text>Pathologist</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        style={{ height: "400px" }}
                        className="instructor-img"
                        variant="top"
                        src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                        <Card.Title>Cameroon Dias </Card.Title>
                        <Card.Text>Emergency Doctor</Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    );
};

export default About;