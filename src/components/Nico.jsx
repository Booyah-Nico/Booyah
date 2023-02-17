import React, { useEffect } from 'react'
import styled from 'styled-components'

const Nico = () => {

  let selectData
  (function randomData(){
    const data = [
      "Don't forget to eat kimchi.",
      "BOOYAH",
      "Mother Fu... === 잘봐 얘들아"
    ]

    selectData = data[Math.floor(Math.random()*data.length)]
  })();

  useEffect(() => {
    
  }, [])

  return (
    <Wrap>
      <TextBox>
        <h1>
          HELLO, NICO'SAM<br />
          <span>Nicolas Serrano Arevalo</span>
        </h1>
        <span>
          DEVELOPER / YOUTUBER
        </span>
        <p>NICO'SAM quote of the day</p>
        <p>{selectData}</p>
      </TextBox>
      <Profile src="91065408_537519927170457_1118354486306453202_n-removebg.png" alt="" />
    </Wrap>
  )
}

export default Nico


const Wrap = styled.div`
  position: relative;
`

const TextBox = styled.div`
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  margin-left:10px;
  color: #fff;
  font-family: 'Oswald', sans-serif;
  >h1{
    font-weight: 300;
    >span {
      font-weight: 500;
    }
  }
  >span {
    display: inline-block;
    border-bottom: 1px solid #7a7a7a;
    border-top: 1px solid #7a7a7a;
    color: #aeaeae;
    padding: 15px 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 13px;
  }
  >p{
    font-weight: 300;
  }
`

const Profile = styled.img`
  display: block;
  width: 100%;
`
