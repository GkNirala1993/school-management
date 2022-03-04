import React, { useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Transportation = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleReset = () => {
    setName("")
    setRoll("")
    setEmail("")
    setMobile("")
    setPickup("")
    setDrop("")
    setArea("")
    setPincode("")
    setAddress1("")
    setAddress2("")
  }

  const history = useHistory();

  const handleSubmmit = () => {
    if(
      name !== "" && 
      roll !=="" &&
      email !== "" &&
      mobile !== "" &&
      pickup !== "" &&
      drop !== "" &&
      area !== "" &&
      pincode !== "" &&
      address1 !== "" &&
      address2 !== "")
      {
    history.push("/")
      }
  }

  return (
    <div>
      <Header />
      <div className="vertical-line"></div>
      <div className="container-fluid transportation">
        <div className="row">
          <div className="col mx-4">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              className="form"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Form.Label>Roll Number</Form.Label>
            <Form.Control
              className="form"
              type="text"
              placeholder="Enter your roll number"
              value={roll}
              onChange={(e) => {
                setRoll(e.target.value);
              }}
            />
            <Form.Label>Student Email</Form.Label>
            <Form.Control
              className="form"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              className="form"
              type="text"
              placeholder="Enter parent's mobile number"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>
          <div className="col mt-4">
            <div className="d-flex">
              <div className="location">
                <Form.Control
                  className="form"
                  type="text"
                  placeholder="Pickup Location"
                  value={pickup}
                  onChange={(e) => {
                    setPickup(e.target.value);
                  }}
                />
                <Form.Control
                  className="form"
                  type="text"
                  placeholder="Landmark"
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                />

                <textarea
                  id="inputField"
                  rows="6"
                  cols="26"
                  placeholder="Address 1"
                  value={address1}
                  onChange={(e) => {
                    setAddress1(e.target.value);
                  }}
                ></textarea>
              </div>
              <div>
                <Form.Control
                  className="form"
                  type="text"
                  placeholder="Drop Location"
                  value={drop}
                  onChange={(e) => {
                    setDrop(e.target.value);
                  }}
                />
                <Form.Control
                  className="form"
                  type="text"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value);
                  }}
                />
                 <textarea
                  id="inputField"
                  rows="6"
                  cols="26"
                  placeholder="Address 2"
                  value={address2}
                  onChange={(e) => {
                    setAddress2(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <Button className="btn-primary m-5" onClick={handleSubmmit}>Confirm & Submmit</Button>
            <Button className="btn-success m-5" onClick={handleReset}>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
