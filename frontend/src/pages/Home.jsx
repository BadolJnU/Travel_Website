import React from 'react'
import '../styles/Home.css';
import {Container, Row, Col } from 'reactstrap';

import worldImg from '../assets/images/world.png';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/subtitle'

const Home = () => {
  return <>
  {/* hero section start */}
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt=''/>
              </div>
              <h1>Travelling opens the door to creating <span className='heighlight'>memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nesciunt dignissimos. Ipsam quisquam atque modi delectus debitis, consectetur labore nostrum dolor quibusdam laborum accusantium, ipsum at incidunt, doloribus magnam necessitatibus.</p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_Img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_Img-box mt-4">
              <video src={heroVideo} alt="" controls/>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_Img-box mt-5">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* hero section end */}
  </>
}

export default Home