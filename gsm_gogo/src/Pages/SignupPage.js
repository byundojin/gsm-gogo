import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import Container from "../Components/Container";
import "./SignupPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Mobile, PC } from "../Components/reactResponsive";
import MobileContainer from "../Components/MobileContainer";
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
    }
    // else {
    //   // 서버로 보내기

    //   alert(`정상적으로 회원가입이 되었습니다. ${id} ${pw} ${student}`);

    //   navigate("/");
    // }
  }

  function CheckField(){
    if (id == undefined) {
      alert("id가 입력되지 않음");
      return false
    }
    else if (pw == undefined) {
      alert("password가 입력되지 않음");
      return false
    }
    else if (pw !== checkPw) {
      alert("비밀번호가 틀렸습니다");
      return false
    }
    else if (student == undefined) {
      alert("student가 입력되지 않음");
      return false
    }
    // else if (id[0] !== 's' || Number(id.substring(1)) > 0 && Number(id.substring(1)) < 100000){
    //   alert("id유형이 옳지 안습니다.")
    //   return false
    // }
    else {
      return true
    }
  }

  async function signupInput(){
    console.log("what")
    if (CheckField()){
        var id = document.getElementById("id").value;
        var password = document.getElementById("pw").value;
        var student = document.getElementById("student").value;
        console.log("what??")
        await axios.post("http://127.0.0.1:8000/acounts/signup/", {
          id: id,
          password: password,
          student : student,
        })
        .then(function (response) {
          console.log(response)
          if (response.data.status == 2) {
            alert("이미 등록된 email");
            console.log(response);
          }
          else if (response.data.status == 1) {
            alert(`정상적으로 회원가입이 되었습니다. ${id} ${pw} ${student}`);
            console.log(response);
            window.location.href = "/"
          }
        })
        .catch((error) => {
          alert("잘못된 데이터 전송");
          console.log(error);
        });
      }
    }

  return (
    <>
      <PC>
        <div className="SignupBackground">
          <div className="SignupBox">
            <Container>
              <Form onSubmit={CheckSamePassword} className="SignupForm">
                <Form.Group className="mb-3" controlId="id">
                  <Form.Label>GSM 이메일</Form.Label>
                  <Form.Control
                    pattern="[A-Za-z0-9]+"
                    type="text"
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                    minLength={6}
                    maxLength={6}
                    required
                    className="FormBox"
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
                    minLength={8}
                    maxLength={20}
                    required
                    className="FormBox"
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
                    minLength={8}
                    maxLength={20}
                    required
                    className="FormBox"
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
                    maxLength={9}
                    required
                    className="FormBox"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="outline-primary"
                  className="SignupButton"
                  onClick={signupInput}
                >
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
        </div>
      </PC>

      <Mobile>
        <div className="SignupBackground">
          <div className="SignupBox">
            <MobileContainer>
              <Form onSubmit={CheckSamePassword} className="SignupForm">
                <Form.Group className="mb-3" controlId="id">
                  <Form.Label>GSM 이메일</Form.Label>
                  <Form.Control
                    pattern="[A-Za-z0-9]+"
                    type="text"
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                    minLength={7}
                    maxLength={20}
                    required
                    className="FormBox"
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
                    className="FormBox"
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
                    className="FormBox"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="student">
                  <Form.Label>학번/이름</Form.Label>
                  <Form.Control
                    placeholder="ex) 1116방시현"
                    type="text"
                    value={student}
                    onChange={(e) => {
                      setStudent(e.target.value);
                    }}
                    maxLength={7}
                    required
                    className="FormBox"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="outline-primary"
                  className="SignupButton"
                  onClick={signupInput}
                >
                  회원 가입
                </Button>

                <div className="MobileSignupText">
                  <span>이미 회원이라면? </span>
                  <Link to="/" className="SignupLink"> 
                    로그인
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

export default SignupPage;
