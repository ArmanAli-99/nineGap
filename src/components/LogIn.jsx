import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
function LogIn() {
  return (
    <Container >
    <Form style={{maxWidth:"500px", margin:"auto", color:"#FFF"}}>
      <Form.Group className="mb-2" controlId="formBasicFirstName">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Link to='Dashboard'>
      <Button variant="primary">
        Log In
      </Button>
      </Link>
    </Form>
    </Container>
  );
}

export default LogIn;


