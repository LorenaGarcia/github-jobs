import {
  Container,
  ContainerInput,
  Input,
  Icon,
  Button,
} from "./Search.styles";

const Search = () => {
  return (
    <Container>
      <ContainerInput>
        <Icon>
          <span className="material-icons">work_outline</span>
        </Icon>
        <Input placeholder="Title, companies, expertise or benefits" />

        <Button>Search</Button>
      </ContainerInput>
    </Container>
  );
};

export { Search };
