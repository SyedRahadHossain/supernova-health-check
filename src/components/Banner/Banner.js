import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../images/banner/banner-1.jpg";
import banner2 from "../../images/banner/banner-2.jpg";
import banner3 from "../../images/banner/banner-3.jpg";

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bold">We have best radiology equipment </h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Best doctors are in our team</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>We are committed to give our best  </h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner; <h2>THis is Banner</h2>