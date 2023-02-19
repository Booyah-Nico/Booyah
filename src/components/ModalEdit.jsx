import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { __patchComment } from '../redux/modules/CommentsSlice';
import ButtonSubmit from './ButtonSubmit';

const ModalEdit = ({ modalId, setModalEditOpen, patchPassword }) => {
  const buttonName = '완료';
  const dispatch = useDispatch();

  const [editContent, setEditContent] = useState('');
  const [inputId, setInputId] = useState('');
  const [editInputPassword, setEditInputPassword] = useState('');

  useEffect(() => {
    if (modalId) {
      setInputId(modalId);
    }
  }, [modalId]);

  const closeHandler = () => {
    setModalEditOpen(false);
  };

  return (
    <Overlay>
      <ModalWrap>
        <Form
          onSubmit={(e) => {
            if (editInputPassword === patchPassword) {
              e.preventDefault();
              dispatch(__patchComment({ id: inputId, content: editContent }));

              setModalEditOpen(false);
              alert('내용이 수정되었습니다');
            } else if (editInputPassword === '') {
              e.preventDefault();
              alert('비밀번호를 입력해주세요');
            } else {
              e.preventDefault();
              alert('비밀번호가 틀렸습니다');
            }
          }}>
          <input
            type='text'
            placeholder='수정할 내용을 입력해주세요'
            onChange={(event) => {
              const { value } = event.target;
              setEditContent(value);
            }}
          />
          <input
            type='password'
            placeholder='비밀번호를 입력해주세요'
            onChange={(event) => {
              const { value } = event.target;
              setEditInputPassword(value);
            }}
          />
          <div className='ButtonWrap'>
            <ButtonSubmit type='submit' buttonName={buttonName}></ButtonSubmit>
            <button className='buttonEdit' onClick={closeHandler}>
              취소
            </button>
          </div>
        </Form>
      </ModalWrap>
    </Overlay>
  );
};

export default ModalEdit;
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
