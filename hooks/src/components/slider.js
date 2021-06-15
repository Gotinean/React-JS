import { Carousel } from 'react-bootstrap';
import React from 'react';
import image from '../image.jpeg'

export function Slider(){
    return(
        <Carousel>
            <Carousel.Item style={{'height': '900px'}}>
                <img 
                    className="d-block w-100"
                    src={image}
                    alt="SomeImg"
                />
                <Carousel.Caption>
                    <h3>Gotineans webapp</h3>
                    <p>Choose the app from Navbar and test it</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '900px'}}>
                <img 
                    className="d-block w-100"
                    src={image}
                    alt="SomeImg"
                />
                <Carousel.Caption>
                    <h3>Gotineans webapp</h3>
                    <p>Choose the app from Navbar and test it</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '900px'}}>
                <img 
                    className="d-block w-100"
                    src={image}
                    alt="SomeImg"
                />
                <Carousel.Caption>
                    <h3>Gotineans webapp</h3>
                    <p>Choose the app from Navbar and test it</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;