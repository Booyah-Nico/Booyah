import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';
import Nico from './components/Nico';
import CommentList from './components/CommentList';

const App = () => {
  return (
    <Wrap> 
      <Nav />
      <Nico />
      <CommentList />
    </Wrap>
  )
}

export default App;

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  flex-basis: 100%;
  > div:nth-child(1) {
    width: 10%;
    background-color:#5585b5; 
  }
  > div:nth-child(2) {
    width: 45%;
    background-color: #53a8b6;
  }
  > div:nth-child(3) {
    width: 45%;
    background-color: #79c2d0;
  }

  /* 미디어쿼리 */
  @media screen and (max-width: 900px) {
    display: block;
    height: auto;

    > div:nth-child(1) {
      width: 100%;
      padding:10px;
      background-color:#5585b5; 
    }
    > div:nth-child(2) {
      width: 100%;
      padding:10px;
      background-color: #53a8b6;
    }
    > div:nth-child(3) {
      width: 100%;
      padding:10px;
      background-color: #79c2d0;
    }
  }
`
