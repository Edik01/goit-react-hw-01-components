import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: blue;
  padding: 20px;
`;
export const Avatar = styled.img`
  margin: 0 auto;
  display: block;
`;

export const Username = styled.p`
text-align: center;
color: white`;

export const Tag = styled.p`
text-align: center;
color: white`;

export const Location = styled.p`
text-align: center;
color: white`;

export const Stats = styled.ul`
list-style: none;
display: flex;
gap:15px;
justify-content: center;
`

export const StatsItem = styled.li`
flex-direction: column;
display: flex;
gap:15px;
align-items: center;
`