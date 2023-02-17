import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  __getComments,
  __deleteComment,
  __patchComment,
} from '../redux/modules/CommentsSlice';
//컴포넌트
import AddComment from './AddComment';

const CommentList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, comments } = useSelector((state) => state.comments);

  const [editComment, setEditComment] = useState(comments.content);

  const [edit, setEdit] = useState(false);
  const [targetId, setTargetId] = useState(null);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const toggleEditing = () => setEdit((prev) => !prev);

  const onChangeContent = (event) => {
    const {
      target: { value },
    } = event;
    setEditComment(value);
  };

  const onSubmitEdit = (event) => {
    event.preventDefault();
    dispatch(__patchComment({ editComment }));
    setEdit(false);
    console.log('수정하기버튼클릭');
  };
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.content}</p>

          {/* 💥수정모드 & 버튼💥 */}
          {edit ? (
            <>
              <form onSubmit={onSubmitEdit}>
                <input
                  type='text'
                  placeholder='수정할 내용을 입력해주세요'
                  value={editComment}
                  onChange={onChangeContent}
                />
                <input type='submit' value='수정하기' />
              </form>
              <button onClick={toggleEditing}>취소</button>
            </>
          ) : (
            <>
              <button onClick={toggleEditing}>수정</button>
              <button onClick={() => dispatch(__deleteComment(comment.id))}>
                삭제
              </button>
            </>
          )}
        </div>
      ))}
      <AddComment />
    </div>
  );
};

export default CommentList;
