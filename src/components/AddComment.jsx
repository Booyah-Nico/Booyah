import React from 'react'
import ButtonSubmit from './ButtonSubmit'

const AddComment = () => {
  const name = "저장"

  return (
    <div>
      <form>
        <input type="text" placeholder='니꼬에쌤게 한마디!'/>
        <ButtonSubmit buttonName={name}></ButtonSubmit>
      </form>
    </div>
  )
}

export default AddComment
