import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getComments } from '../redux/modules/CommentsSlice';
//컴포넌트
import AddComment from './AddComment'

const CommentList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);
  
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      나는 코멘트 리스트!!
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.content}</p> 
        </div>
      ))}
      <AddComment />
    </div>
  )
}

export default CommentList
