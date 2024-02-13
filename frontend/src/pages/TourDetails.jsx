import React, { useEffect, useRef, useState, useContext } from 'react'
import "../styles/Tour-Details.css"

import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';

//import tourData from '../assets/data/tours';

import calculateRating from './../Utils/CalculateRating'
import avater from '../assets/images/avatar.jpg'

import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../Utils/config';
import { AuthContext} from './../context/AuthContext'

const TourDetails = () => {

   const { id } = useParams()

   const reviewMsgRef = useRef('')
   const [ tourRating, setTourRating ] = useState(null)

   const {user} = useContext(AuthContext)


   const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)
   //console.log(tour)

   //Formate the Date
   const options = { day: "numeric", month: "long", year: "numeric"}

   //destructure properties from tour object
   const { photo, title, desc, price, reviews, city, distance, maxGroupSize, address } = tour ?? {}

   const { totalRating, avgRating } = calculateRating(reviews)

  //SUBMIT REQUEST TO SERVER
  const submitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value

    try {
      if(!user || user === undefined || user === null) {
        alert("Please Sign In")
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      }
      console.log(reviewObj)
      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      });

      const result = await res.json();
      alert(result.message)
    } catch (err) {
      alert(err.message)
      console.log(err.message)
    }
  }

  useEffect(() => {
    window.scrollTo(0,0)
  }, [tour])

  return (
    <>
    <section>
      <Container>
        {
          loading && <h4 className='text-center pt-5'>Loading........</h4>
        }
        {
          error && <h4 className='text-center pt-5'>{error}</h4>
        }
        {
          !loading && !error && <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className='d-flex align-items-center gap-5'>
                  <span className="tour__location d-flex align-items-center gap-1">
                  <i class="ri-star-fill" style={{'color':'var(--secondary-color)'}}></i>{avgRating === 0 ? null : avgRating}
                  {totalRating === 0 ? ("Not related") : (<span>({reviews?.length})</span>)}
                  </span>
                  <span><i class="ri-map-pin-fill"></i>{address}</span>
                </div>
                <div className="extra__tour-details">
                  <span><i class="ri-map-pin-2-line"></i>{city}</span>
                  <span><i class="ri-money-dollar-circle-line"></i>{price}</span>
                  <span><i class="ri-map-pin-5-line"></i>{distance} k/m</span>
                  <span><i class="ri-group-line"></i>{maxGroupSize}</span>
                </div>
                <h2>Description</h2>
                <p>{desc}</p>
              </div>
              {/* Tour Reviews Section */}
              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>

                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 rating__group'>
                    <span onClick={() => setTourRating(1)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={() => setTourRating(2)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={() => setTourRating(3)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={() => setTourRating(4)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={() => setTourRating(5)}><i class="ri-star-s-fill"></i></span>
                  </div>
                  <div className="review__input">
                    <input type="text" ref={reviewMsgRef} placeholder='Share your Thoughts....' required/>
                    <button type='submit' className='btn primary__btn text-white'>Submit</button>
                  </div>
                </Form>
                <ListGroup className='user__reviews'>
                  {
                    reviews?.map(review => (
                      <div className="review__item" key={review.id}>
                        <img src={avater} alt="" />
                        <div className='w-100'>
                          <div className='d-flex align-items-center justify-content-between mt-3'> 
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>
                            {review.rating} <i class="ri-star-s-fill"></i>
                          </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
        }
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default TourDetails