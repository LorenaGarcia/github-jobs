import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin-top: 2rem;
  gap: 2rem;
  grid-template-rows: 1fr;
  grid-template-columns: 25rem 1fr;
  grid-template-areas: "contentlLeft contentRigth";

  @media (max-width: 680px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "contentlLeft"
      "contentRigth";
  }

  @media (min-width: 681px) and (max-width: 900px) {
    grid-template-columns: 15rem 1fr;
  }
`;

const Left = styled.div`
  grid-area: contentlLeft;
`;

const Rigth = styled.div`
  grid-area: contentRigth;
  overflow: auto;
`;

export { Container, Left, Rigth };
