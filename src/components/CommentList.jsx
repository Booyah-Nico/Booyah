import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    <Wrap>
      <h2>니꼬샘에게 인사를 남겨봐요!</h2>
      <p></p>

      <CommentZone>
        {comments.map((comment) => (
          <CommentBox key={comment.id}>
            <div>
              <p className='author'>{comment.name}</p>
              <p className='content'>{comment.content}</p>
            </div>

            <div>
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
          </CommentBox>
        ))}
      </CommentZone>

      {modalEditOpen ? (
        <ModalEdit
          key={modalId}
          modalId={modalId}
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
          setModalEditOpen={setModalEditOpen}></ModalEdit>
      ) : null}

      <AddCommentBox>
        <AddComment />
      </AddCommentBox>
    </Wrap>
  );
};

export default CommentList;

const Wrap = styled.div`
  padding: 30px 30px 0 30px;
  box-sizing: border-box;
  > h2 {
    font-size: 2rem;
    font-family: 'Oswald', sans-serif;
    color: #aaa;
    margin-bottom: 20px;
  }
  > p {
    width: 90px;
    height: 4px;
    background-color: #f19a37;
  }
`;

const CommentZone = styled.div`
  margin-top: 20px;
`;
const CommentBox = styled.div`
  border-bottom: 1px solid #4c4b4b;
  padding-bottom: 15px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  > div:nth-child(1) {
    p {
      font-size: 17px;
      color: #aaa;
    }
    p.author {
      color: #c3c3c3;
      line-height: 25px;
      font-weight: bold;
    }
  }
  > div:nth-child(2) {
  }
`;

const AddCommentBox = styled.div`
  position: absolute;
  bottom: 1rem;

  @media screen and (max-width: 900px) {
    position: relative;
    bottom: inherit;
    padding: 1rem 0 1rem 0;
  }
`;
