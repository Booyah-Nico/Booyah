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
import ModalDelete from './ModalDelete';
import ModalEdit from './ModalEdit';

const CommentList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, comments } = useSelector((state) => state.comments);

  //패스워드
  const [commentPassword, setCommentPassword] = useState('');

  //삭제, 수정 모달오픈핸들러
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);

  //삭제, 수정 모달 id
  const [deletId, setDeleteId] = useState('');
  const [modalId, setModalId] = useState('');

  //삭제, 수정 비밀번호
  const [deletePassword, setDeletePassword] = useState('');
  const [patchPassword, setPatchPassword] = useState('');

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const onDeleteHandler = (event) => {
    setModalDeleteOpen(true);
    setDeleteId(event.target.name);
    setDeletePassword(event.target.value);
    console.log(deletId);
    console.log(deletePassword);
  };

  const onModalOpenHandler = (event) => {
    setModalEditOpen(true);
    setModalId(event.target.name);
    setPatchPassword(event.target.value);
  };

  return (
    <Wrap>
      <h2>니꼬쌤에게 인사를 남겨봐요!</h2>
      <p></p>

      <CommentZone>
        {comments.map((comment) => (
          <CommentBox key={comment.id}>
            <div>
              <p className='author'>{comment.name}</p>
              <p className='content'>{comment.content}</p>
            </div>

            <div>
              <button
                name={comment.id}
                value={comment.password}
                onClick={onDeleteHandler}>
                삭제
              </button>
              <button
                name={comment.id}
                value={comment.password}
                onClick={onModalOpenHandler}>
                수정
              </button>
            </div>
          </CommentBox>
        ))}
      </CommentZone>
      {modalDeleteOpen ? (
        <ModalDelete
          key={deletId}
          deletId={deletId}
          commentPassword={commentPassword}
          deletePassword={deletePassword}
          setDeletePassword={setDeletePassword}
          setModalDeleteOpen={setModalDeleteOpen}
        />
      ) : null}
      {modalEditOpen ? (
        <ModalEdit
          key={modalId}
          modalId={modalId}
          commentPassword={commentPassword}
          patchPassword={patchPassword}
          setPatchPassword={setPatchPassword}
          setModalEditOpen={setModalEditOpen}
        />
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
  overflow-y: scroll;
  height: calc(100% - 300px);
  @media screen and (max-width: 900px) {
    height: 400px;
  }
`;
const CommentBox = styled.div`
  position: relative;
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
    p.content {
      margin-top: 10px;
    }
  }
  > div:nth-child(2) {
    position: absolute;
    right: 0;
    top: 0;
    button {
      background-color: transparent;
      border: 0;
      outline: 0;
      color: #aaa;
      border: 1px solid #aaa;
      padding: 2px 5px;
      cursor: pointer;
      &:hover {
        border: 1px solid #f19a37;
        background-color: #f19a37;
        color: #fff;
      }
    }
    > button:first-child {
      margin-right: 10px;
    }
  }
`;

const AddCommentBox = styled.div`
  position: absolute;
  bottom: 1rem;
  width: calc(100% - 62px);

  @media screen and (max-width: 900px) {
    position: relative;
    width: 100%;
    bottom: inherit;
    padding: 3rem 0 1rem 0;
  }
`;
