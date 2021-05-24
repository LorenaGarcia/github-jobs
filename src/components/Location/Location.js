import {
  Container,
  ContainerInput,
  Input,
  Icon,
  Title,
  RadioButton,
  CheckBox,
} from "./Location.styles";

const Location = ({ city, setCity, SearchPosition, setFullTime, fullTime }) => {
  return (
    <Container>
      <CheckBox>
        <input
          onClick={() => setFullTime(!fullTime)}
          type="checkbox"
          id="fulltime"
          name="fulltime"
          value="fulltime"
        />
        <label htmlFor="fulltime">Full time</label>
      </CheckBox>
      <div>
        <Title>Location</Title>
        <ContainerInput>
          <Icon>
            <span className="material-icons">public</span>
          </Icon>
          <Input
            onKeyDown={(e) =>
              e.key === "Enter" && SearchPosition(e.target.value)
            }
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="City, state, zip code or country"
          />
        </ContainerInput>
        <RadioButton onChange={(e) => SearchPosition(e.target.value)}>
          <input
            type="radio"
            id="Remote"
            name="city"
            value="Remote"
            checked={city === "Remote"}
            readOnly
          />
          <label htmlFor="Remote">Remote</label>
        </RadioButton>
        <RadioButton onChange={(e) => SearchPosition(e.target.value)}>
          <input
            type="radio"
            id="london"
            name="city"
            value="London"
            checked={city === "London"}
            readOnly
          />
          <label htmlFor="london">London</label>
        </RadioButton>
        <RadioButton onChange={(e) => SearchPosition(e.target.value)}>
          <input
            type="radio"
            id="Amsterdam"
            name="city"
            value="Amsterdam"
            checked={city === "Amsterdam"}
            readOnly
          />
          <label htmlFor="Amsterdam">Amsterdam</label>
        </RadioButton>
        <RadioButton onChange={(e) => SearchPosition(e.target.value)}>
          <input
            type="radio"
            id="Berlin"
            name="city"
            value="Berlin"
            checked={city === "Berlin"}
            readOnly
          />
          <label htmlFor="Berlin">Berlin</label>
        </RadioButton>
      </div>
    </Container>
  );
};

export { Location };
