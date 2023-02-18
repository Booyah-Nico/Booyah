import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { __patchComment } from '../redux/modules/CommentsSlice';

const ModalEdit = ({
  modalId,
  setModalEditOpen,
  passwordInput,
  setPasswordInput,
}) => {
  const dispatch = useDispatch();

  const [editContent, setEditContent] = useState('');
  const [inputId, setInputId] = useState('');

  useEffect(() => {
    if (modalId) {
      setInputId(modalId);
    }
  }, [modalId]);

  const closeHandler = () => {
    setModalEditOpen(false);
  };

  // const onTransmitHandler = (event) => {
  //   event.preventDefault();
  //   dispatch(__patchComment({ id: inputId, content: editContent }));
  //   setModalEditOpen(false);
  // };

  return (
    <>
      <form
        onSubmit={(e) => {
          if (passwordInput) {
            e.preventDefault();
            dispatch(__patchComment({ id: inputId, content: editContent }));
          } else {
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
          placeholder='비밀번호를 입력하세요'
          onChange={(event) => {
            const { value } = event.target;
            setPasswordInput(value);
          }}
        />
        <button type='submit'>완료</button>
        <button onClick={closeHandler}>취소</button>
      </form>
    </>
  );
};

export default ModalEdit;
