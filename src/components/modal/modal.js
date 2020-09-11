import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = props => {

  const { buttonLabel, className, score } = props;
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('')
  const results = JSON.parse(localStorage.getItem("results"));

  const toggle = () => setModal(!modal);

  const nameChangeHandler = e => {
      setName(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    toggle()

    const newResult = {
        name: name,
        score: score
    }

    let allResutls = [];
    if (results) {
        allResutls = [...results, newResult]
    } else {
        allResutls = [newResult]
    }

    localStorage.setItem("results", JSON.stringify(allResutls));

    setName('')
  }

  return (
    <>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <input type="text" onChange={nameChangeHandler} value={name}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitHandler}>Submit Result</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalExample;