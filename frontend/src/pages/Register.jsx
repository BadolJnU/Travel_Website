import React, {useState} from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/login.css'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    phone: undefined,
    password: undefined
  })
  const handleChange = e => {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  }
  const handleClick = e => {
    e.preventDefault()
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='Enter your Username' required onChange={handleChange} id='userName'/>
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Enter your Email' required onChange={handleChange} id='email'/>
                  </FormGroup>
                  <FormGroup>
                    <input type="phone" placeholder='Enter your Phone Number' required onChange={handleChange} id='phone'/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Enter your password' required onChange={handleChange} id='password'/>
                  </FormGroup>
                  <Button type='submit' className='btn secondary__btn auth__btn'>Register</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register