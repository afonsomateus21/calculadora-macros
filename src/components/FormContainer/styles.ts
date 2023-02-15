import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.section`
  width: 1200px;
  height: 850px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  background: var(--green-200);
  
  & > div {
    background: var(--green-500);
    
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: center;

    img {
      /* background: yellow; */
      width: 80%;
      height: 100%;
    }

    h1 {
      text-align: center;
    }

    & + div {
      width: 60%;
      background: var(--green-200);
      padding: 1.5rem;
    }
  }
`