import { Container, Navigation, Content, Footer } from "./Layout.styles";
import { Search } from "../Search";
import { Main } from "../Main";
import { Left, Rigth } from "../Main/Main.styles";
import { Location } from "../Location";
import { Jobs } from "../Jobs";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation>
        <strong>Github</strong> Jobs
      </Navigation>
      <Content>{children}</Content>
      <Footer>created by Lorraine</Footer>
    </Container>
  );
};

export { Layout };
