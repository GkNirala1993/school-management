import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    console.log("test");
    if (email !== "" && password !== "") {
      let data = {
        email: email,
        password: password,
      };
      axios({
        method: "POST",
        url: "https://reqres.in/api/login",
        data: data,
      }).then((res) => {
        console.log(res.data);
        window.localStorage.setItem("jwtToken", res.data.token);
        history.push("/enquiry");
      });
    }
  };
  return (
    <div className="login-form">
      <h3 className="text-center p-3">Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            type="email"
            placeholder="email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your id with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
