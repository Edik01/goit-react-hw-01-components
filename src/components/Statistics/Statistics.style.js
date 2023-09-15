import { getRandomHexColor } from "helpers/getRandomHexColor";
import styled from "styled-components";
export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export const Stats = styled.ul`
display: flex;
justify-content: center;
gap: 20px;
list-style: none;`

export const StatsItem = styled.li`
background-color: ${()=>getRandomHexColor()};
padding: 10px;`