import React, { useRef } from 'react'
import './SearchBar.css'

import { Col, Form, FormGroup } from 'reactstrap'

import { BASE_URL } from '../Utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxPeopleRef = useRef(0)

    const navigate = useNavigate()


    const searchHandler = async() => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxPeople = maxPeopleRef.current.value

        if (location === '' || distance === '' || maxPeople === '') {
            alert("All fields are required!!!")
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourbySearch?city=${location}&distance=${distance}&maxGroupSize=${maxPeople}`)

        if(!res.ok){
            alert("Something went wrong")
        }

        const result = await res.json()

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxPeople}`, {state: result.data})
    }
  return (
    <Col lg="2">
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" name="location" id="location" placeholder='Where are you going?' ref={locationRef}/>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" name="distance" id="distance" placeholder='Distance k/m' ref={distanceRef}/>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" name="maxPeople" id="maxPeople" placeholder='0' ref={maxPeopleRef}/>
                    </div>
                </FormGroup>
                <span className='search__icon' type="submit" onClick={searchHandler}>
                    <i class="ri-search-2-line"></i>
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar