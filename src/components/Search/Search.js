import {
  Container,
  ContainerInput,
  Input,
  Icon,
  Button,
} from "./Search.styles";

const Search = ({ searchWord, setSearchWord, SearchPosition, city }) => {
  return (
    <Container>
      <ContainerInput>
        <Icon>
          <span className="material-icons">work_outline</span>
        </Icon>
        <Input
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && SearchPosition}
          value={searchWord}
          placeholder="Title, companies, expertise or benefits"
        />

        <Button onClick={() => SearchPosition(city)}>Search</Button>
      </ContainerInput>
    </Container>
  );
};

export { Search };
