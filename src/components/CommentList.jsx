import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getComments, __deleteComment } from '../redux/modules/CommentsSlice';
//컴포넌트
import AddComment from './AddComment';

const CommentList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, comments } = useSelector((state) => state.comments);
  console.log(comments);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  // const deleteHandler = () => {
  //   dispatch(__deleteComment);
  // };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.content}</p>
          <button onClick={() => dispatch(__deleteComment(comment.id))}>
            삭제
          </button>
        </div>
      ))}
      <AddComment />
    </div>
  );
};

export default CommentList;
