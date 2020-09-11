import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

const Example = () => {

    const [ formValues, setFormValues ] = useState({ 
        email: '',
        password: ''
    })
    const history = useHistory();
    const dispatch = useDispatch();

    const onChangeHandler = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const formSubmitHandler = e => {
        e.preventDefault();
        localStorage.setItem('loggedIn', true)
        history.push("/add-quiz");
        dispatch({
            type: 'ADD_USER',
            user: formValues,
            loggedIn: true
        })
    }

  return (
    <Form className="mt-5" method="POST" inline onSubmit={formSubmitHandler}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" value={formValues.email} onChange={onChangeHandler} required/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" value={formValues.password} onChange={onChangeHandler} required/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Example;