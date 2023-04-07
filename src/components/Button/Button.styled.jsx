import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  margin: 8px 0;
  border-radius: 7.5px;
  background-color: #65000B;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  
  position: relative;
  left: 50vw;
  transform: translateX(-50%);

  &:hover,
  &:focus {
    background-color: #7B001C;
  }
`;