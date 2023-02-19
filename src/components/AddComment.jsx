import React, { useState } from 'react';
import ButtonSubmit from './ButtonSubmit';
import { __postComment } from '../redux/modules/CommentsSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const AddComment = () => {
  const buttonName = '저장';
  const [name, setName] = useState('');
  const [content, setContents] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const RandomNum = uuidv4();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (name === '') {
      return alert('이름을 입력해주세요');
    } else if (content === '') {
      return alert('내용을 입력해주세요');
    } else if (password === '') {
      return alert('비밀번호를 입력해주세요');
    }
    dispatch(
      __postComment({
        id: RandomNum,
        name: name,
        content: content,
        password: password,
      })
    );
  };

  return (
    <Wrap>
      <Form onSubmit={onSubmitHandler}>
        <input
          className='inputText'
          type='text'
          placeholder='이름을 입력해주세요!'
          onChange={(event) => {
            const { value } = event.target;
            setName(value);
          }}
        />
        <textarea
          className='textArea'
          type='text'
          placeholder='니꼬쌤에게 한마디!'
          onChange={(event) => {
            const { value } = event.target;
            setContents(value);
          }}
        />
        <SubmitBox>
          <input
            type='password'
            placeholder='비밀번호를 입력해주세요!'
            autoComplete='on'
            onChange={(event) => {
              const { value } = event.target;
              setPassword(value);
            }}
          />
          <ButtonSubmit buttonName={buttonName}></ButtonSubmit>
        </SubmitBox>
      </Form>
    </Wrap>
  );
};

export default AddComment;
const Wrap = styled.div`
  width: 100%;
`;
const Form = styled.form`
  input.inputText {
    display: block;
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #4c4b4b;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  textarea.textArea {
    display: block;
    width: 100%;
    height: 5em;
    background-color: transparent;
    border: 0;
    outline: 0;
    resize: none;
    border-bottom: 1px solid #4c4b4b;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    ::placeholder {
      vertical-align: middle;
    }
  }
`;

const SubmitBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  > input {
    background-color: transparent;
    outline: 0;
    border: 0;
    padding: 5px;
    border-bottom: 1px solid #4c4b4b;
    box-sizing: border-box;
    margin-right: 15px;
  }
`;
