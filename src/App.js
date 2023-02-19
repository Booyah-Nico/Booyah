import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';
import Nico from './components/Nico';
import CommentList from './components/CommentList';

const App = () => {
  return (
    <Wrap>

      <Nico />
      <CommentList />
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-basis: 100%;
  > div:nth-child(1) {
    width: 50%;
    background-color: #575757;
  }
  > div:nth-child(2) {
    width: 50%;
    background-color: #434242;
    position: relative;
  }

  /* 미디어쿼리 */
  @media screen and (max-width: 900px) {
    display: block;
    height: auto;
    > div:nth-child(1) {
      width: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    > div:nth-child(2) {
      width: 100%;
    }
    > div:nth-child(3) {
      width: 100%;
    }
  }
`;
