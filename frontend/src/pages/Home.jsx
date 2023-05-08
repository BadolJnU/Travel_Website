import React from 'react'
import '../styles/Home.css';
import {Container, Row, Col } from 'reactstrap';

import worldImg from '../assets/images/world.png';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/subtitle'
import SearchBar from '../shared/SearchBar';
import ServicesList from '../Services/ServicesList';
import FeaturedTourList from '../components/Featured_Tours/FeaturedTourList';
import MasonoryImageGallery from '../components/Image-Gallery/MasonoryImageGallery';
import Testimonial from '../components/Testimonial/Testimonial';

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
          <SearchBar />
        </Row>
      </Container>
    </section>
    {/* hero section end */}
    {/* Service section Start */}
    <section>
      <Container>
        <Row>
          <Col lg="3">
            <h5 className='services__subtitle'>What we serve</h5>
            <h2 className='services__title'>We offer our best service</h2>
          </Col>
          <ServicesList />
        </Row>
      </Container>
    </section>
    {/* Service section End */}
    {/* Feature section Start */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className='featured-tour-title'>Our Featured Tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* Service section End */}
    {/* Experience section Start */}
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"Experience"}></Subtitle>
              <h2>With all our Experiences <br /> we will serve you</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor alias, <br />totam quae ipsum explicabo voluptas</p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* Experience section End */}
    {/* Gallery section Start */}
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"}></Subtitle>
            <h2 className='gallery__title'>Visit our customers tour Gallery</h2>
          </Col>
          <Col lg="12">
            <MasonoryImageGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* Gallery section End */}
    {/* Testimonial section Start */}
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Fans Love"}></Subtitle>
            <h2 className='testimonial__title'>What our fans says about us</h2>
          </Col>
          <Col lg="12">
            <Testimonial />
          </Col>
        </Row>
      </Container>
    </section>
    {/* Testimonial section End */}
  </>
}

export default Home