import React, {useState, useEffect} from 'react';
import CommonSection from '../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap'

import TourData from '../assets/data/tours'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'

import "../styles/Tour.css";

const Tours = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {

    const pages = Math.ceil(5/ 4); //later we will use backend data
    setPageCount(pages)

  }, [page]);


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
          <Row>
            {
              TourData?.map(tour => <Col lg='3' key={tour.id} className='mb-4'><TourCard tour={tour}></TourCard></Col>)
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
        </Container>
        <Newsletter/>
      </section>
    </>
  )
}

export default Tours