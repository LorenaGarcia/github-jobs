import {
  Image,
  ContainerImage,
  InformationBusiness,
  ContainerLocation,
  Title,
  ContainerTitle,
  FullTime,
  Days,
  Description,
  Back,
  Apply,
  How,
} from "./Detail.styles";
import { Left, Rigth } from "@/components/Main/Main.styles";

const Detail = ({ data }) => {
  const {
    company,
    company_logo,
    created_at,
    description,
    how_to_apply,
    location,
    title,
    type,
  } = data;

  const back = () => {
    return history.back();
  };

  return (
    <>
      <Left>
        <Back onClick={() => back()}>&#8592; Back to search</Back>
        <How>How to Apply</How>
        <Apply dangerouslySetInnerHTML={{ __html: how_to_apply }} />
      </Left>
      <Rigth>
        <ContainerTitle>
          <Title>{title}</Title>
          <FullTime>{type}</FullTime>
        </ContainerTitle>
        <Days>
          <span className="material-icons">schedule</span>
          {created_at}
        </Days>
        <ContainerImage>
          <Image src={company_logo} />
          <InformationBusiness>
            <p>{company}</p>
            <ContainerLocation>
              <span className="material-icons">public</span>
              {location}
            </ContainerLocation>
          </InformationBusiness>
        </ContainerImage>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Rigth>
    </>
  );
};

export { Detail };
