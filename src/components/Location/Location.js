import {
  Container,
  ContainerInput,
  Input,
  Icon,
  Title,
  RadioButton,
  CheckBox,
} from "./Location.styles";

const Location = () => {
  return (
    <Container>
      <CheckBox>
        <input type="checkbox" id="fulltime" name="fulltime" value="fulltime" />
        <span></span>
        <label htmlFor="fulltime">Full time</label>
      </CheckBox>
      <div>
        <Title>Location</Title>
        <ContainerInput>
          <Icon>
            <span className="material-icons">public</span>
          </Icon>
          <Input placeholder="City, state, zip code or country" />
        </ContainerInput>
        <RadioButton>
          <input type="radio" id="london" name="city" />
          <label htmlFor="london">London</label>
        </RadioButton>
        <RadioButton>
          <input type="radio" id="Amsterdam" name="city" />
          <label htmlFor="Amsterdam">Amsterdam</label>
        </RadioButton>

        <RadioButton>
          <input type="radio" id="New York" name="city" />
          <label htmlFor="New York">New York</label>
        </RadioButton>

        <RadioButton>
          <input type="radio" id="Berlin" name="city" />
          <label htmlFor="Berlin">Berlin</label>
        </RadioButton>
      </div>
    </Container>
  );
};

export { Location };
