import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin-top: 2rem;
  gap: 2rem;
  grid-template-rows: 1fr;
  grid-template-columns: 30% 1fr;
  grid-template-areas: "contentlLeft contentRigth";

  @media (max-width: 480px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "contentlLeft"
      "contentRigth";
  }
`;

const Left = styled.div`
  grid-area: contentlLeft;
`;

const Rigth = styled.div`
  grid-area: contentRigth;
`;

export { Container, Left, Rigth };
