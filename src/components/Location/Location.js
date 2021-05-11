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
        <span class="checkbox-custom rectangular"></span>
        <label for="fulltime">Full time</label>
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
          <label for="london">London</label>
        </RadioButton>
        <RadioButton>
          <input type="radio" id="Amsterdam" name="city" />
          <label for="Amsterdam">Amsterdam</label>
        </RadioButton>

        <RadioButton>
          <input type="radio" id="New York" name="city" />
          <label for="New York">New York</label>
        </RadioButton>

        <RadioButton>
          <input type="radio" id="Berlin" name="city" />
          <label for="Berlin">Berlin</label>
        </RadioButton>
      </div>
    </Container>
  );
};

export { Location };
