import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const singleDetail = data.filter((details) => details.id === serviceId);

  return (
    <div className="container">
      <h2 className="text-primary my-3">Service Details</h2>
      <Card className="my-4">
        <Card.Img variant="top" src={singleDetail[0]?.img} />
        <Card.Body>
          <Card.Title>Service name: {singleDetail[0]?.name}</Card.Title>
          <Card.Text>{singleDetail[0]?.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
