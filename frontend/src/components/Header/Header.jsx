import React, {useContext, useRef} from 'react'
import {Container, Row, Button } from 'reactstrap';
import {NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './Header.css'
import { AuthContext } from '../../context/AuthContext';

const nav_Link = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]



const Header = () => {

  const navigate = useNavigate()
  const menuRef = useRef(null)
  const {user, dispatch} = useContext(AuthContext)

  const logout = () => {
    dispatch({type: 'LOGOUT'})
    navigate('/')
  }

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu')
  }
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-justify justify-content-between">
            {/* Logo Start */}
            <div className="logo">
              <img src={logo} alt=''/>
            </div>
            {/* Logo End */}
            {/* Menu Start */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav_Link.map((item,index)=>(
                    <li className="nav__item" key={index}>
                      <NavLink to={item.path} className={navClass=>navClass.isActive? 'active__link': ""}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* Menu End */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap4-">
                {
                  user? <>
                    <h5 className='mb-0 px-3'>{user.username}</h5>
                    <Button className="btn primary__btn" onClick={logout}>Logout</Button>
                  </> :
                    <>
                      <Button className="btn secondary__btn"><Link to='/login'>Login</Link></Button>
                      <Button className="btn primary__btn"><Link to='/register'>Register</Link></Button>
                    </>
                }
              </div>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-4-line"></i>
              </span>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header