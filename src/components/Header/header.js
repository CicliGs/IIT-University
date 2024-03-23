import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import pht1 from '../../images/photos/uni1.jpg';
import pht2 from '../../images/photos/uni2.jpg';
import "../Header/style.css";

export default class Header extends Component {
  render() {
    return (
      <div className="rrphotos">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pht1}
              alt="Изучай IT вместе с нами"
            />
            <Carousel.Caption>
              <h3>Изучай IT вместе с нами</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pht2}
              alt="Знакомство с иностранными студентами"
            />
            <Carousel.Caption>
              <h3>Знакомство с иностранными студентами</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}