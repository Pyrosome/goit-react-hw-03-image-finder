import styled from 'styled-components';

export const Item = styled.li`
`;

export const Img = styled.img`
  border-radius: 2.5px;
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;