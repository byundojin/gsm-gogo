import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import Container from "../Components/Container";
import "./SignupPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

function SignupPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [student, setStudent] = useState("");
  // const [checkResult, setCheckResult] = useState(true);
  const navigate = useNavigate();

  function CheckSamePassword() {
    if (pw !== checkPw) {
      alert("비밀번호가 틀렸습니다");
    } else {
      // 서버로 보내기

      alert(`정상적으로 회원가입이 되었습니다. ${id} ${pw} ${student}`);

      navigate("/");
    }
  }



  async function signupInput(){
    var id = document.getElementById("id").value;
    var password = document.getElementById("pw").value;
    var student = document.getElementById("student").value;
    await axios.post("http://127.0.0.1:8000/login/signup/", {
      id: id,
      password: password,
      student : student,
    })
    // console.log("send | id :",{id},"| pw :",{password},"| student :",{student})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    <Link to="/"></Link>
  }

  return (
    <>
      <div className="SignupBox">
        <Container>
          <Form onSubmit={CheckSamePassword} className="SignupForm">
            <Form.Group className="mb-3" controlId="id">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                placeholder="ex) s22000"
                pattern="[A-Za-z0-9]+"
                type="text"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                minLength={6}
                maxLength={6}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pw">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                value={pw}
                onChange={(e) => {
                  setPw(e.target.value);
                }}
                minLength={7}
                maxLength={20}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="checkPw">
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                type="password"
                value={checkPw}
                onChange={(e) => {
                  setCheckPw(e.target.value);
                }}
                minLength={7}
                maxLength={20}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="student">
              <Form.Label>학번/이름</Form.Label>
              <Form.Control
                placeholder="ex) 1116/방시현"
                type="text"
                value={student}
                onChange={(e) => {
                  setStudent(e.target.value);
                }}
                minLength={7}
                maxLength={9}
                required
              />
            </Form.Group>

            <Button type="submit" variant="outline-primary" onClick={signupInput}>
              회원 가입
            </Button>

            <div className="SignupText">
              <span>이미 회원이라면? </span>
              <Link to="/" className="SignupLink">
                로그인
              </Link>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default SignupPage;
