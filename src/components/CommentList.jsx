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

  const [editMode, setEditMode] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalId, setModalId] = useState('');

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
    console.log(modalId);
  };
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.content}</p>
          <button onClick={() => dispatch(__deleteComment(comment.id))}>
            삭제
          </button>

          {/* 💥수정모드💥 */}
          {editMode ? null : (
            <button name={comment.id} onClick={onModalOpenHandler}>
              수정
            </button>
          )}
        </div>
      ))}
      {modalEditOpen ? (
        <ModalEdit
          key={modalId}
          modalId={modalId}
          setModalEditOpen={setModalEditOpen}></ModalEdit>
      ) : null}

      <AddComment />
    </div>
  );
};

export default CommentList;
