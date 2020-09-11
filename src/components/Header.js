import React, {useState, useEffect} from 'react';
import { Row, Container } from 'reactstrap';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Example = () => {

  const history = useHistory();
  const [ loggedInUser, setLoggedInUser ] = useState()
  const loginStatus = localStorage.getItem('loggedIn')
  
  const logoutHandler = () => {
    localStorage.removeItem('loggedIn')
    history.push("/");
    setLoggedInUser(false);
  }

  useEffect(()=>{
    setLoggedInUser(loginStatus ? true : false)
  }, [loginStatus])

  return (
    <Container>
      <Row className="justify-content-center">
          <Link to="/" className="px-2">Home</Link>
          {
            loggedInUser
            ? <Link to="/" className="px-2" onClick={logoutHandler}>LogOut</Link>
            : <Link to="/register" className="px-2">Register</Link>
          }
          {
            loggedInUser &&
            <Link to="/add-quiz" className="px-2">Add Quiz</Link>
          }
          <Link to="/results" className="px-2">Results</Link>
      </Row>
    </Container>
  );
}

export default Example;