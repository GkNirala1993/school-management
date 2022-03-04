import React from "react";
import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

const ChangeStateModal = ({ show, handleClose }) => {
  const [student_name, setStudentName] = useState("");
  const [parent_email, setParentEmail] = useState("");
  const [parent_mobile, setParentMobile] = useState("");
  const [select_class, setSelectClass] = useState("");
  const [select_batch, setSelectBatch] = useState("");

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Move student from enquiry to register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Student name"
                    value={student_name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="parent email"
                    value={parent_email}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="parent mobile"
                    value={parent_mobile}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Select class"
                    value={select_class}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Batch or Timing"
                    value={select_batch}
                  />
                </Form.Group>
                <div className="my-5 d-flex justify-content-between">
                  <Button variant="success" type="submit">
                    Register
                  </Button>
                  <Button variant="danger" type="submit">
                    Cancel
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChangeStateModal;
