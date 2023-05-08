import React from 'react';
import "./Newsletter.css";

import { Container, Row, Col } from 'reactstrap';
import maleTouristImg from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Subscribe now to get exclusive tour package information...</h2>
                        <div className="newsletter__input">
                            <input type="email" name="email" id="email" placeholder='Enter your mail' />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas saepe rem similique ipsam porro velit tenetur harum dolorem illo!</p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                        <img src={maleTouristImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter