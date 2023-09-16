import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;

  background-color: ${({ $isOnline }) => {
    return $isOnline ? 'green' : 'red';
  }};
`;
