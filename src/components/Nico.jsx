import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Clock from './Clock'

const Nico = () => {
  let selectData;
  (function randomData() {
    const data = [
      "Don't forget to eat kimchi.",
      'BOOYAH',
      'Mother Fu... === 잘봐 얘들아',
      'Super Sexy!',
    ];

    selectData = data[Math.floor(Math.random() * data.length)];
  })();

  useEffect(() => {}, []);

  return (
    <Wrap>
      <Shild></Shild>
      <Nav></Nav>
      <TextBox>
        <h1>
          HELLO, NICO'SAM
          <br />
          <span>Nicolas Serrano Arevalo</span>
        </h1>
        <span>DEVELOPER / YOUTUBER</span>
        <p>NICO'SAM quote of the day</p>
        <p>{selectData}</p>
      </TextBox>
      <Clock></Clock>
    </Wrap>
  );
};

export default Nico;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(profile.jpg);
  background-position: center;
  background-size: cover;
`;

const Shild = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
`

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
  color: #fff;
  font-family: 'Oswald', sans-serif;
  > h1 {
    font-weight: 300;
    font-size: 3rem;
    > span {
      font-weight: 500;
    }
  }
  > span {
    display: inline-block;
    border-bottom: 1px solid #7a7a7a;
    border-top: 1px solid #7a7a7a;
    color: #aeaeae;
    padding: 15px 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 1.2rem;
    margin: 15px 0px;
  }
  > p {
    font-weight: 300;
    font-size: 1.2rem;
  }
`;

const Profile = styled.img`
  display: block;
  width: 100%;
`;
