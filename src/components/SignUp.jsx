import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import {useState} from 'react';

function SignUp() {
  const [name, setName] = useState("");
  return (
    <Container >
    <Form style={{maxWidth:"500px", margin:"auto"}}>
      <Form.Group className="mb-2 " controlId="formBasicFirstName" name="name">
        <Form.Label style={{color:"#ffff"}}>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicFirstName">
        <Form.Label style={{color:"#ffff"}}>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicFirstName">
        <Form.Label style={{color:"#ffff"}}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label style={{color:"#ffff"}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Link to='LogIn'>
      <Button variant="primary">
        Sign Up
      </Button>
      </Link>
    </Form>
    </Container>
  );
}

export default SignUp;
