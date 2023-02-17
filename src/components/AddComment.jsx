import React, { useState } from 'react';
import ButtonSubmit from './ButtonSubmit';
import { __postComment } from '../redux/modules/CommentsSlice';
import { useDispatch } from 'react-redux';

const AddComment = () => {
  const buttonName = '저장';
  const [name, setName] = useState('');
  const [content, setContents] = useState('');
  
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(__postComment({
      name: name,
      content: content
    }))
  }
  
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input 
          type='text' 
          placeholder='이름을 입력해주세요!'
          onChange={(event) => {
            const {value} = event.target;
            setName(value);
          }}
          />
        <input 
          type='text' 
          placeholder='니꼬에쌤게 한마디!' 
          onChange={(event) => {
            const {value} = event.target;
            setContents(value);
          }}
          />
        <ButtonSubmit buttonName={buttonName}></ButtonSubmit>
      </form>
    </div>
  );
};

export default AddComment;
