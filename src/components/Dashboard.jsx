import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import rightImg from '../assets/rightbg.png'

const Dashboard = () => {
  return (
    <Container fluid>
    <Row style={{height:"100vh", marginLeft:"100px", }} >
      <Col lg={6}>
        <Row >
          <h1 style={{fontSize:"40px", marginTop:"150px", }}>Hello, Welcome to NineGap</h1>
        </Row>
        <Row>   
          <p style={{color:"white",lineHeight:"40px"}}>
           For more Information you can visit to our offcial 
             <a href="https://ninegap.com/" target="_blank"> WEBSITE </a>
          </p>
        </Row>
      </Col>
      <Col lg={6} style={{position:"relative", overflow:"hidden"}}>
        <img src={rightImg} className="rightImg" />
      </Col>
    </Row>
  </Container>
  )
}

export default Dashboard