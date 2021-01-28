import React from "react";
import {Modal, Button} from "react-bootstrap";
import { PropTypes } from 'prop-types';

const Dialogs = {
  Input: function Input(props) {
    const inputRef = React.createRef();

    const handleClose = () => {
      const text = inputRef.current.value
      props.handleClose(text)
    }
    return (
        <Modal show={props.open} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.text}
          </p>
          <input ref = {inputRef} type="text" class="form-control" placeholder="Enter your name"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

Dialogs.Input.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired
}

export default Dialogs