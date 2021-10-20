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
                        <h1 className="text-primary rounded-pill fw-bold text-center py-2 bg-light">We Have Best Radiology Equipment</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-primary rounded-pill fw-bold text-center py-2 bg-light">Best Doctors Are In Our Team</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-primary rounded-pill fw-bold text-center py-2 bg-light">We Are Committed To Give Our Best  </h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner; <h2>THis is Banner</h2>