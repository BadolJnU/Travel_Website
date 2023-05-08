import React from 'react';
import Slider from 'react-slick';
import avtImg1 from "../../assets/images/ava-1.jpg";
import avtImg2 from "../../assets/images/ava-2.jpg";
import avtImg3 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }
  return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptatum nulla dicta tempore quo quis, dolor nemo culpa voluptatem quos? Sit sunt debitis perferendis illo labore nobis! Maiores, minus error?</p>
            <div className="d-flex align-items-center mt-3">
                <img src={avtImg1} alt="" className='w-25 h-25 rounded-2'/>
                <div className='mx-3'>
                    <h6 className='mb-0 mt-3'>John Do</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptatum nulla dicta tempore quo quis, dolor nemo culpa voluptatem quos? Sit sunt debitis perferendis illo labore nobis! Maiores, minus error?</p>
            <div className="d-flex align-items-center mt-3">
                <img src={avtImg2} alt="" className='w-25 h-25 rounded-2'/>
                <div className='mx-3'>
                    <h6 className='mb-0 mt-3'>Melani Audit</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptatum nulla dicta tempore quo quis, dolor nemo culpa voluptatem quos? Sit sunt debitis perferendis illo labore nobis! Maiores, minus error?</p>
            <div className="d-flex align-items-center mt-3">
                <img src={avtImg3} alt="" className='w-25 h-25 rounded-2'/>
                <div className='mx-3'>
                    <h6 className='mb-0 mt-3'>Rakesh Rishab</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptatum nulla dicta tempore quo quis, dolor nemo culpa voluptatem quos? Sit sunt debitis perferendis illo labore nobis! Maiores, minus error?</p>
            <div className="d-flex align-items-center mt-3">
                <img src={avtImg1} alt="" className='w-25 h-25 rounded-2'/>
                <div className='mx-3'>
                    <h6 className='mb-0 mt-3'>Rucchi Kaddekar</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptatum nulla dicta tempore quo quis, dolor nemo culpa voluptatem quos? Sit sunt debitis perferendis illo labore nobis! Maiores, minus error?</p>
            <div className="d-flex align-items-center mt-3">
                <img src={avtImg2} alt="" className='w-25 h-25 rounded-2'/>
                <div className='mx-3'>
                    <h6 className='mb-0 mt-3'>Punon Chowdhury</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>

}

export default Testimonial