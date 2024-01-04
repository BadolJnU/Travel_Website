import React from 'react'
import "../styles/Tour-Details.css"

import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';

import tourData from '../assets/data/tours';

import calculateRating from './../Utils/CalculateRating'

const TourDetails = () => {

   const { id } = useParams()


   const tour = tourData.find(tour => tour.id === id)

   //destructure properties from tour object
   const { photo, title, desc, price, reviews, city, distance, maxGroupSize, address } = tour

   const { totalRating, avgRating } = calculateRating(reviews)
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className='d-flex align-items-center gap-5'>
                  <span className="tour__location d-flex align-items-center gap-1">
                  <i class="ri-star-fill" style={{'color':'var(--secondary-color)'}}></i>{calculateRating === 0 ? null : avgRating}
                  {totalRating === 0 ? ("Not related") : (<span>({reviews?.length})</span>)}
                  </span>
                  <span><i class="ri-map-pin-fill"></i>{address}</span>
                </div>
                <div className="extra__tour-details">
                  <span><i class="ri-map-pin-2-line"></i>{city}</span>
                  <span><i class="ri-money-dollar-circle-line"></i>{price}</span>
                  <span><i class="ri-group-line"></i>{maxGroupSize}</span>
                </div>
                <h2>Description</h2>
                <p>{desc}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TourDetails