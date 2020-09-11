import React, {useState} from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Modal from '../../components/modal/modal';

const Home = () => {

    const quizs = JSON.parse(localStorage.getItem("quizs"));
    const [ score, setScore ] = useState(0);
    const [ answeredNumbers, setAnsweredNumbers ] = useState([])

    const onChangeHandler = (item, index) => {

        if(!answeredNumbers.includes(index)) {
            setAnsweredNumbers([...answeredNumbers, index])
            if(quizs[index].rightAnswer === item.target.value) {
                setScore(score + 1)
            }
        }

    }

    return (
        <div>
            <Form>
                <ol>
                    {
                        quizs &&
                        [...quizs].map((item, i)=>{
                            return (
                                <li key={i} className="text-left mt-5">
                                    {item.title}
                                    <FormGroup onChange={(item)=>onChangeHandler(item, i)} tag="fieldset">
                                        {
                                            item.options.map((option, j)=>{
                                                return <FormGroup className="m-0" key={j}>
                                                    <Label check>
                                                        <Input type="radio" name={`radio-${i}`} value={option} />{' '}
                                                        {option}
                                                    </Label>
                                                </FormGroup>
                                            })
                                        }
                                    </FormGroup>
                                </li>
                            )
                        })
                    }
                </ol>
                <Modal score={score} buttonLabel="submit"/>
            </Form>
        </div>
    )
}

export default Home;