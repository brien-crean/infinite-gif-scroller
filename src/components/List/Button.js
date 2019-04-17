import styled from 'styled-components';

const Button = styled.button`
  background-color: lightgray;
  border: #222 1px solid;
  color: black;
  font-size: 20px;
  width: 150px;
  height: 50px;
  font-family: Helvetica;
  margin-bottom: 100px;
  &:hover {
    background-color: black;
    color: lightgray;
  }
  &:focus {
    outline: none;
  }
`;

export default Button;