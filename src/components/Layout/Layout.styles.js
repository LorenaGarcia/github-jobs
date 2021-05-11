import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  padding: 1rem 4rem;
  gap: 2rem;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "navigation"
    "content"
    "footer";

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }
`;

const Navigation = styled.div`
  grid-area: navigation;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 24px;
  color: #282538;
`;

const Content = styled.div`
  grid-area: content;
`;

const Footer = styled.div`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #b9bdcf;
  height: 5rem;
`;

export { Container, Navigation, Content, Footer };
