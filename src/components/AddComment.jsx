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
      <input
        className='inputPassword'
        type='password'
        placeholder='비밀번호를 입력해주세요!'
        onChange={(event) => {
          const { value } = event.target;
          setPassword(value);
        }}
      />
      <ButtonSubmit buttonName={buttonName}></ButtonSubmit>
    </Form>
  );
};

export default AddComment;

const Form = styled.form``;
