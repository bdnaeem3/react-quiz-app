import React, {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = () => {

  const quizs = JSON.parse(localStorage.getItem("quizs"));
  const [ quiz, setQuiz ] = useState({
    title: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    rightAnswer: ''
  })

  const onChangeHandler = e => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()

    const newQuiz = {
      title: quiz.title,
      options: [quiz.option1, quiz.option2, quiz.option3, quiz.option4],
      rightAnswer: quiz.rightAnswer
    }

    let allQuizs = [];
    if (quizs) {
      allQuizs = [...quizs, newQuiz]
    } else {
      allQuizs = [newQuiz]
    }

    localStorage.setItem("quizs", JSON.stringify(allQuizs));

    setQuiz({
      title: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      rightAnswer: ''
    })
  }

  return (
    <Form method="POST" className="mt-5" onSubmit={submitHandler}>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Title</Label>
        <Col sm={10}>
          <Input type="text" name="title" id="text" placeholder="Title" onChange={onChangeHandler} value={quiz.title} required/>
        </Col>
      </FormGroup>
    

      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Option 1</Label>
        <Col sm={10}>
          <Input type="text" name="option1" id="option1" placeholder="Option 1" onChange={onChangeHandler} value={quiz.option1} required />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Option 2</Label>
        <Col sm={10}>
          <Input type="text" name="option2" id="option2" placeholder="Option 2" onChange={onChangeHandler} value={quiz.option2} required />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Option 3</Label>
        <Col sm={10}>
          <Input type="text" name="option3" id="option3" placeholder="Option 3"  onChange={onChangeHandler} value={quiz.option3} required/>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Option 4</Label>
        <Col sm={10}>
          <Input type="text" name="option4" id="option4" placeholder="Option 4" onChange={onChangeHandler} value={quiz.option4}  required/>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Right Answer</Label>
        <Col sm={10}>
          <Input type="number" name="rightAnswer" id="number" placeholder="Right Answer" onChange={onChangeHandler}  value={quiz.rightAnswer} required/>
        </Col>
      </FormGroup>
      
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default Example;