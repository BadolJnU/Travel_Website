import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './TourCard.css';
import calculateRating from './../Utils/CalculateRating';

const TourCard = ({tour}) => {

    const { id, photo, title, city, price, featured, reviews } = tour;

    const {totalRating, avgRating} = calculateRating(reviews);
  return (
    <div className='tour__card'>
        <Card>
            <div className="tour__img">
                <img src={photo} alt="Tour Image" />
                {featured && <span>Featured</span>}
            </div>
        </Card>

        <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className="tour__location d-flex align-items-center gap-1">
                <i class="ri-map-pin-line"></i>{city}
                </span>
                <span className="tour__location d-flex align-items-center gap-1">
                <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? ("Not related") : (<span>({reviews.length})</span>)}
                
                </span>
            </div>
            <h5 className="tour__title"><Link to={`/tours/${id}`}>{title}</Link></h5>
            <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
                <h5>{price}<span> /per person</span></h5>
                <button className="btn booking__btn">
                    <Link to={`/tours/${id}`}>Booking Now</Link>
                </button>
            </div>
        </CardBody>
    </div>
  )
}

export default TourCard