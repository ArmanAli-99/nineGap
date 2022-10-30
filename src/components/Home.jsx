import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import rightImg from '../assets/rightbg.png'
import "./Home.css"
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <Container fluid>
      <Row style={{height:"100vh", marginLeft:"100px", }} >
        <Col lg={6}>
          <Row >
            <h1 style={{fontSize:"40px", marginTop:"150px",color:"#ffff" }}>9 Names, ONE Value.</h1>
          </Row>
          <Row>   
            <p style={{color:"white",lineHeight:"30px"  }}>NineGap™ thrives to bring digital innovation to the world via a
             powerful suite of its services. We intend to create an impact not just
             by developing alternatives, rather we focus on problems that seem too 
             difficult to solve using technology and with our innovative approach, 
             we try to make that a reality.</p>
          </Row>
          <Row>
          <Link to="SignUp">
            <button className='signUpBtn'>Get In Touch</button>
          </Link>
          </Row>  
        </Col>
        <Col lg={6} style={{position:"relative", overflow:"hidden"}}>
          <img src={rightImg} className="rightImg" />
        </Col>
      </Row>
    </Container>
  )
}

export default Home