import React, {useState, useContext} from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/login.css'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from './../context/AuthContext'
import {BASE_URL} from './../Utils/config'

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined
  })
  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext)
  const handleChange = e => {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  }
  const handleClick = async(e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)

      })
      const result = await res.json()

      if(!res.ok){
        alert(result.message)
      }

      dispatch({type: 'REGISTER_SUCCESS'})
      navigate('/login')
    } catch (err) {
      alert(err.message)
    }
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