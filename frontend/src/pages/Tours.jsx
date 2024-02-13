import React, {useState, useEffect} from 'react';
import CommonSection from '../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap'

//import TourData from '../assets/data/tours'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'

import "../styles/Tour.css";

import useFetch from './../hooks/useFetch'
import {BASE_URL} from './../Utils/config'



const Tours = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {data:tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {

    const pages = Math.ceil(tourCount / 8); 
    setPageCount(pages)
    window.scroll(0,0)

  }, [page, tourCount, tours]);

  console.log(pageCount)


  return (
    <>
      <CommonSection title={"All Tours"}></CommonSection>
      <section>
        <Container>
          <Row>
            <SearchBar></SearchBar>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          {
            loading && <h4 className='text-center pt-5'>Loading .......</h4>
          }
          {
            error && <h4 className='text-center pt-5'>{error}</h4>
          }
          {
            !loading && !error && <Row>
            {
              tours?.map(tour => <Col lg='3' key={tour._id} className='mb-4'><TourCard tour={tour}></TourCard></Col>)
            }
            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {
                  [...Array(pageCount).keys()].map(number =>(
                    <span key={number} onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))
                }
              </div>
            </Col>
          </Row>
          }
        </Container>
        <Newsletter/>
      </section>
    </>
  )
}

export default Tours