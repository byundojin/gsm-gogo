import Container from "../Components/Container";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
function LoginPage() {
  const [inputId, setInputId] = useState();
  const [inputPassword, setInputPassword] = useState();

  const navigate = useNavigate();

  const handleLoginClick = () => {
    console.log("id : " + inputId);
    console.log("password : " + inputPassword);

    // 서버로 보내기

    // navigate("/main");
  };

  return (
    <>
      <div className="LoginBox">
        <Container>
          <Form className="LoginForm">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={(e) => {
                  setInputId(e.target.value);
                }}
                type="id"
                placeholder="아이디"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlaintextPassword">
              <Form.Control
                onChange={(e) => {
                  setInputPassword(e.target.value);
                }}
                type="password"
                placeholder="비밀번호"
              />
            </Form.Group>

            <Button
              type="submit"
              variant="outline-primary"
              onClick={handleLoginClick}
            >
              로그인
            </Button>

            <div className="SignupText">
              <span>GSM GOGO가 처음이라면? </span>
              <Link to="signup" className="SignupLink">
                회원가입
              </Link>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default LoginPage;
