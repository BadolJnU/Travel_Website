import React from 'react'
import ServicesCard from './ServicesCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesDate = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
]

const ServicesList = () => {
  return <>
    {
        servicesDate.map((item, index) => (
            <Col lg="3" key={index}>
                <ServicesCard item={item}/>
            </Col>
        ))
    }
  </>
}

export default ServicesList