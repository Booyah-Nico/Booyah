import React from 'react';
import styled from 'styled-components';

const ButtonSubmit = ({buttonName}) => {
  return (
    <Button type="submit">{buttonName}</Button>
  )
}

export default ButtonSubmit;

const Button = styled.button`
  
`