import {
  Container,
  Image,
  Footer,
  ContainerDescription,
  ContainerFlex,
  Location,
  Days,
  Title,
  Position,
  FullTime,
} from "./Jobs.styles";

const Jobs = ({ data }) => {
  const { company, company_logo, title, location, created_at, type, url } =
    data;

  return (
    <Container
      href={`/position/${url.replace(
        "https://jobs.github.com/positions/",
        ""
      )}`}
    >
      {company_logo ? (
        <Image src={company_logo} />
      ) : (
        <Image src={"/images/logo.jpeg"} />
      )}

      <ContainerDescription>
        <Title>{company}</Title>
        <Position>{title}</Position>

        <Footer>
          {type && <FullTime>{type}</FullTime>}

          <ContainerFlex>
            <Location>
              <span className="material-icons">public</span>
              {location}
            </Location>
            <Days>
              <span className="material-icons">schedule</span>
              {created_at}
            </Days>
          </ContainerFlex>
        </Footer>
      </ContainerDescription>
    </Container>
  );
};

export { Jobs };
