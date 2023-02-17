import React, { useState } from 'react';
import ButtonSubmit from './ButtonSubmit';
import { __postComment } from '../redux/modules/CommentsSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type='text'
          placeholder='이름을 입력해주세요!'
          onChange={(event) => {
            const { value } = event.target;
            setName(value);
          }}
        />
        <input
          type='password'
          placeholder='비밀번호를 입력해주세요!'
          onChange={(event) => {
            const { value } = event.target;
            setPassword(value);
          }}
        />
        <input
          type='text'
          placeholder='니꼬에쌤게 한마디!'
          onChange={(event) => {
            const { value } = event.target;
            setContents(value);
          }}
        />
        <ButtonSubmit buttonName={buttonName}></ButtonSubmit>
      </form>
    </div>
  );
};

export default AddComment;
