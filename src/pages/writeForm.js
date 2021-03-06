import React, { useState, useRef } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import MultipleValueTextInput from "react-multivalue-text-input";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  width: 100%;
  padding: 35px 16px 15px 16px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f5;
`;

const TextareaInput = styled.textarea`
  border: none;
  padding: 10px 0;
  width: 100%;
  height: 110px;
  border-bottom: 1px solid #f1f1f5;
`;

const PhotoDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
`;
const PhotoTitle = styled.h1`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
`;
const Photo = styled.img`
  width: 30%;
  height: 90px;
  border-radius: 6px;
`;

const EmailDiv = styled.div`
  width: 100%;
  padding: 15px 16px 15px 16px;
`;
const EmailTitle = styled.h1`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 10px;
`;
const EmailId = styled.input`
  border: none;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f5;
  margin-right: 10px;
`;
const EmailInputDiv = styled.div`
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  border: none;
  width: 40%;
  margin-left: 10px;
  border-bottom: 1px solid #f1f1f5;
  padding: 10px 0;
`;

const HideInput = styled.input`
  border: none;
  padding: 5px 0;
  background-color: #f1f1f5;
  margin-top: 5px;
  position: absolute;
  width: 33%;
  left: 56%;
`;

const NextButton = styled.div`
  width: 100%;
  background-color: #1565c0;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;
const inputstyle = {
  border: "none",
  width: "100%",
  padding: "10px 0",
  borderBottom: "1px solid #f1f1f5",
};

function WriteForm() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [gender, setGender] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [hideemail, setHideemail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [home, setHome] = useState("");
  const [depar, setDepar] = useState("");
  const [job, setJob] = useState("");
  const [tech, setTech] = useState([]);
  const [hobby, setHobby] = useState("");
  const [mbti, setMbti] = useState("");
  const [rank, setRank] = useState("");
  const [link, setLink] = useState([]);

  const navigate = useNavigate();

  const imgRef = useRef();

  function nameChange(e) {
    setName(e.target.value);
  }

  function photoChange(e) {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
  }

  function genderChange(e) {
    setGender(e.target.value);
  }

  function textChange(e) {
    setText(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function domainChange(e) {
    setDomain(e.target.value);
  }

  function phonenumberChange(e) {
    setPhonenumber(e.target.value);
  }

  function homeChange(e) {
    setHome(e.target.value);
  }

  function deparChange(e) {
    setDepar(e.target.value);
  }

  function jobChange(e) {
    setJob(e.target.value);
  }

  function hobbyChange(e) {
    setHobby(e.target.value);
  }

  function mbtiChange(e) {
    setMbti(e.target.value);
  }

  function rankChange(e) {
    setRank(e.target.value);
  }

  function hideemailChange(e) {
    setHideemail(e.target.value);
  }

  function SendFormData() {
    var companyId = localStorage.getItem("company");
    fetch("http://34.64.143.215:8080/api/profile/1", {
      method: "post",
      body: JSON.stringify({
        compId: companyId,
        profileImageUrl: photo,
        memberName: name,
        email: email + "@" + domain,
        phoneNumber: phonenumber,
        gender: gender,
        hobby: hobby,
        deptName: depar,
        address: home,
        task: job,
        position: rank,
        techSkill: tech,
        mbti: mbti,
        links: link,
        description: text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const { memberCustomUrl } = response;
        window.localStorage.setItem("memberCustomUrl", memberCustomUrl);
        navigate(`/information?code=${memberCustomUrl}`);
      });
  }

  return (
    <div>
      <Header title="????????? ???????????????."></Header>
      <MainContainer>
        <PhotoDiv>
          <PhotoTitle>??????</PhotoTitle>
          <Photo
            src={photo ? photo : `${process.env.PUBLIC_URL}/images/noimg.png`}
          ></Photo>
          <input
            type="file"
            style={{ marginLeft: "30%", marginTop: "10px" }}
            onChange={photoChange}
            ref={imgRef}
          ></input>
        </PhotoDiv>
        <Div>
          <Title>??????</Title>
          <Input placeholder="?????????" onChange={nameChange}></Input>
        </Div>
        <Div>
          <Title>??????</Title>
          <Input placeholder="??????" onChange={genderChange}></Input>
        </Div>
        <Div>
          <Title>????????????</Title>
          <TextareaInput
            onChange={textChange}
            maxlength="100"
            placeholder="???????????? ???????????? ??????(???????????????)?????? ?????? ??????????????? ??? ?????? ?????????(???????????? ??????), ????????? ?????????(?????? ????????????) ??? ????????? ???????????? ????????????. 29?????? ?????? ??? ?????? 1?????? ???????????????, ???????????? ????????? ??? ????????????."
          ></TextareaInput>
        </Div>
        <EmailDiv>
          <EmailTitle>?????????</EmailTitle>
          <EmailInputDiv>
            <EmailId onChange={emailChange} placeholder="kkkkkk"></EmailId>
            <>@</>
            <Select onChange={domainChange}>
              <option value="">?????? ??????</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="daum.net">daum.net</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="nate.com">nate.com</option>
            </Select>
          </EmailInputDiv>
          {domain == "" ? (
            <HideInput onChange={hideemailChange}></HideInput>
          ) : null}
        </EmailDiv>
        <Div>
          <Title>?????????</Title>
          <Input
            onChange={phonenumberChange}
            placeholder="010-9999-9999"
          ></Input>
        </Div>
        <Div>
          <Title>?????? ???</Title>
          <Input onChange={homeChange} placeholder="????????? ?????????"></Input>
        </Div>
        <Div>
          <Title>??????</Title>
          <Input onChange={deparChange} placeholder="????????? ???"></Input>
        </Div>
        <Div>
          <Title>??????</Title>
          <Input onChange={jobChange} placeholder="UX designer"></Input>
        </Div>
        <Div>
          <Title>????????????</Title>
          <MultipleValueTextInput
            style={inputstyle}
            onItemAdded={(item, allItem) => setTech(allItem)}
            onItemDeleted={(item, allItem) => setTech(allItem)}
            name="item-input"
            placeholder="JavaScript, CSS, Python ???.."
          ></MultipleValueTextInput>
        </Div>
        <Div>
          <Title>??????</Title>
          <Input onChange={hobbyChange} placeholder="??????, ?????? ???..."></Input>
        </Div>
        <Div>
          <Title>MBTI</Title>
          <Select style={{ width: "100%" }} onChange={mbtiChange}>
            <option value="INTJ">INTJ</option>
            <option value="INTP">INTP</option>
            <option value="ENTJ">ENTJ</option>
            <option value="ENTP">ENTP</option>
            <option value="INFJ">INFJ</option>
            <option value="INFP">INFP</option>
            <option value="ENFJ">ENFJ</option>
            <option value="ENFP">ENFP</option>
            <option value="ISTJ">ISTJ</option>
            <option value="ISFJ">ISFJ</option>
            <option value="ESTJ">ESTJ</option>
            <option value="ESFJ">ESFJ</option>
            <option value="ISTP">ISTP</option>
            <option value="ISFP">ISFP</option>
            <option value="ESTP">ESTP</option>
            <option value="ESFP">ESFP</option>
          </Select>
        </Div>
        <Div>
          <Title>??????</Title>
          <Input onChange={rankChange} placeholder="??????"></Input>
        </Div>
        <Div>
          <Title>??????</Title>
          <MultipleValueTextInput
            style={inputstyle}
            onItemAdded={(item, allItem) => setLink(allItem)}
            onItemDeleted={(item, allItem) => setLink(allItem)}
            name="item-input1"
            placeholder="https://wwit.design/2022/05/28/trost/"
          ></MultipleValueTextInput>
        </Div>
      </MainContainer>
      <NextButton onClick={SendFormData}>??????</NextButton>
    </div>
  );
}

export default WriteForm;
