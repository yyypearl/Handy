import React from "react";
import styled from "styled-components";
import userImg from "../img/userimg.svg";
import CalenderBox from "../component/CalenderBox";
import letter from "../img/letterimg.svg";
import send from "../img/send.svg";

function Calender() {
  return (
    <>
      <UserInfo>
        <UserName>이름님</UserName>
        <UserImage>
          <img src={userImg} alt="유저 이미지" />
        </UserImage>
      </UserInfo>

      <CalenderCover>
        <CalenderBox />
      </CalenderCover>

      <FriendsZone>
        <img src={userImg} alt="친구들" />
      </FriendsZone>

      <Bottom>
        <Img>
          <img src={letter} alt="편지함" />
        </Img>
        <img src={send} alt="보내기" />
      </Bottom>
    </>
  );
}

export default Calender;

const UserInfo = styled.div`
  width: 360px;
  height: 100px;
  display: flex;
  margin-top: 20px;
`;

const UserName = styled.div`
  font-size: 20px;
  float: left;
  margin-left: 30px;
  margin-top: 20px;
`;

const UserImage = styled.div`
  padding-left: 180px;
`;

const CalenderCover = styled.div`
  text-align: center;
`;

const FriendsZone = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
`;

const Bottom = styled.div`
  position: fixed;
  top: 96%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex;
`;

const Img = styled.div`
  margin-right: 10px;
`;
