import React from 'react';
import styled from 'styled-components';

const ButtonSubmit = ({ buttonName }) => {
  return <Button type='submit'>{buttonName}</Button>;
};

export default ButtonSubmit;

const Button = styled.button`
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
`;
