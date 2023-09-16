import styled from 'styled-components';
export const Table = styled.table`
  width: 600px;
  margin: 0 auto;
`;
export const Head = styled.thead`
  background-color: green;
  height: 30px;
`;

export const Th = styled.th`
  color: white;
`;
export const Tr = styled.tr`
  height: 30px;
  background-color: ${({ $index }) => {
    return $index % 2 ? 'white' : 'grey';
  }};
  color: ${({ $index }) => {
    return $index % 2 ? 'black' : 'white';
  }};
`;
