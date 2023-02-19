import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ButtonSubmit from './ButtonSubmit';
import { __deleteComment } from '../redux/modules/CommentsSlice';

const ModalDelete = ({ deletId, setModalDeleteOpen, deletePassword }) => {
  const buttonName = '삭제';
  const dispatch = useDispatch();

  const [inputPassword, setInputPassword] = useState('');

  const closeHandler = () => {
    setModalDeleteOpen(false);
  };
  return (
    <Overlay>
      <ModalWrap>
        <Form
          onSubmit={(e) => {
            if (inputPassword === deletePassword) {
              e.preventDefault();
              dispatch(__deleteComment(deletId));
              setModalDeleteOpen(false);
            } else if (inputPassword === '') {
              e.preventDefault();
              alert('비밀번호를 입력해주세요');
            } else {
              e.preventDefault();
              alert('비밀번호가 틀렸습니다');
            }
          }}>
          <input
            type='password'
            placeholder='비밀번호를 입력해주세요'
            onChange={(event) => {
              const { value } = event.target;
              setInputPassword(value);
            }}
          />
          <div className='ButtonWrap'>
            <ButtonSubmit type='submit' buttonName={buttonName} />
            <button className='buttonEdit' type='button' onClick={closeHandler}>
              취소
            </button>
          </div>
        </Form>
      </ModalWrap>
    </Overlay>
  );
};

export default ModalDelete;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  z-index: 9999;
  padding: 0 20px;
  box-sizing: border-box;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ModalWrap = styled.div`
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  background: #434242;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Form = styled.form`
  padding: 24px;
  border-radius: 18px;
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 5px;
    outline: 0;
    border: 0;
    background-color: transparent;
    border-bottom: 1px solid #aaa;
    margin-bottom: 10px;
  }
  div.ButtonWrap {
    display: flex;
    justify-content: end;
    gap: 10px;
    margin-top: 15px;
    button.buttonEdit {
      background-color: #eee;
      border: 0;
      outline: 0;
      color: #121212;
      border: 1px solid #eee;
      padding: 2px 5px;
      cursor: pointer;
      &:hover {
        border: 1px solid #f19a37;
        background-color: #f19a37;
        color: #fff;
      }
    }
  }
`;
