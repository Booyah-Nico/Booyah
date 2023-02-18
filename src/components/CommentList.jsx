import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  __getComments,
  __deleteComment,
  __patchComment,
} from '../redux/modules/CommentsSlice';
//컴포넌트
import AddComment from './AddComment';
import ModalEdit from './ModalEdit';

const CommentList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, comments } = useSelector((state) => state.comments);
  console.log(comments);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalId, setModalId] = useState('');

  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const onModalOpenHandler = (event) => {
    setModalEditOpen(true);
    setModalId(event.target.name);
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.content}</p>

          <form
            onSubmit={() => {
              if (passwordInput === comment.password) {
                dispatch(__deleteComment(comment.id));
              } else if (passwordInput !== comment.password) {
                alert('비밀번호를 입력하세요.');
              }
            }}>
            <input
              type='password'
              placeholder='비밀번호를 입력하세요.'
              key={comment.id}
              onChange={(e) => {
                const { value } = e.target;
                setPasswordInput(value);
              }}
            />
            <button type='submit'>삭제</button>
          </form>
          <button name={comment.id} onClick={onModalOpenHandler}>
            수정
          </button>
        </div>
      ))}

      {modalEditOpen ? (
        <ModalEdit
          key={modalId}
          modalId={modalId}
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
          setModalEditOpen={setModalEditOpen}></ModalEdit>
      ) : null}

      <AddComment />
    </div>
  );
};

export default CommentList;
