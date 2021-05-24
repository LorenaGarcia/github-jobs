import { Container, Button } from "./Pagination.styles";

const Pagination = ({ page, morePositions }) => {
  return (
    <Container>
      <Button onClick={() => morePositions("left")}>{"<"}</Button>
      <Button page={true}>{page}</Button>
      <Button onClick={morePositions}>{">"}</Button>
    </Container>
  );
};

export { Pagination };
