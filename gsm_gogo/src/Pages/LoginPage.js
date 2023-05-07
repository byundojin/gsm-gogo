import Container from "../Components/Container";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

import LogoImg from "../img/logo.png";
import { Mobile, PC } from "../Components/reactResponsive";
import MobileContainer from "../Components/MobileContainer";

import axios from 'axios';

function LoginPage() {
  const [inputId, setInputId] = useState();
  const [inputPassword, setInputPassword] = useState();

  const navigate = useNavigate();

  function loginCheck(){
    if (inputId == undefined){
      alert("id가 입력되지않았습니다.")
      return false
    }
    else if (inputPassword == undefined){
      alert("password가 입력되지 않았습니다.")
      return false
    }
    return true
  };
  
  async function signupInput(){
    if(loginCheck()){
      console.log("id : " + inputId);
      console.log("password : " + inputPassword);
      var id = inputId;
      var password = inputPassword;
      console.log("what??")
      await axios.post("http://127.0.0.1:8000/acounts/login/", {
        id: id,
        password: password,
        student : "student",
      })
      .then(function (response) {
        console.log(response)
        if (response.data.status == 1) {
          console.log("1");
          alert(`정상적으로 로그인 되었습니다.`);
          console.log("2");
          window.location.href = "main/"
          localStorage.setItem('user-email', id+"@gsm.hs.kr");
        }
        else if (response.data.status == 3) {
          alert(`비밀번호가 다름니다.`);
        }
        else if (response.data.status == 2) {
          alert(`등록되지 않은 email입니다.`);
        }
      })
      .catch((error) => {
        alert("잘못된 데이터 전송");
        console.log(error);
      });
    }
  };

  return (
    <>
      <PC>
        <div className="LoginBackground">
          <div className="LoginBox">
            <img src={LogoImg} />
            <Container>
              <Form className="LoginForm">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    onChange={(e) => {
                      setInputId(e.target.value);
                    }}
                    type="text"
                    placeholder="GSM 이메일"
                    className="FormLoginBox"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Control
                    onChange={(e) => {
                      setInputPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="비밀번호"
                    className="FormLoginBox"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="outline-primary"
                  onClick={signupInput}
                  className="LoginButton"
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
        </div>
      </PC>

      <Mobile>
        <div className="MobileLoginBackground">
          <div className="MobileLoginBox">
            <img src={LogoImg} />
            <MobileContainer>
              <Form className="MobileLoginForm">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    onChange={(e) => {
                      setInputId(e.target.value);
                    }}
                    type="text"
                    placeholder="GSM 이메일"
                    className="FormLoginBox"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Control
                    onChange={(e) => {
                      setInputPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="비밀번호"
                    className="FormLoginBox"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="outline-primary"
                  onClick={signupInput}
                  className="LoginButton"
                >
                  로그인
                </Button>

                <div className="MobileSignupText">
                  <span>GSM GOGO가 처음이라면? </span>
                  <Link to="signup" className="SignupLink">
                    회원가입
                  </Link>
                </div>
              </Form>
            </MobileContainer>
          </div>
        </div>
      </Mobile>
    </>
  );
}

export default LoginPage;