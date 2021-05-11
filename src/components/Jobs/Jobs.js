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

const Jobs = () => {
  return (
    <Container>
      <Image src="https://github-jobs.s3.amazonaws.com/ECpGRAvtPJcaAikKcTMctfe1?response-content-disposition=inline%3B%20filename%3D%22university-of-toronto-vector-logo.png%22%3B%20filename%2A%3DUTF-8%27%27university-of-toronto-vector-logo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJENXOYUQN2IQEWRA%2F20210511%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210511T175229Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=18ae022abcbb39b66db201978a7264e94dd6f95f3c6c3659063d2f81f7da3409" />

      <ContainerDescription>
        <Title>Kasisto</Title>
        <Position>Front-End Software Engineer</Position>

        <Footer>
          <FullTime>Full time</FullTime>
          <ContainerFlex>
            <Location>
              <span className="material-icons">public</span>New York
            </Location>
            <Days>
              <span className="material-icons">schedule</span>5 days ago
            </Days>
          </ContainerFlex>
        </Footer>
      </ContainerDescription>
    </Container>
  );
};

export { Jobs };
