import styled from "styled-components";

const Image = styled.img`
  width: 70px;
  height: 70px;
`;

const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  margin-bottom: 3rem;
`;

const InformationBusiness = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  p {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #334680;
  }
`;

const ContainerLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #b9bdcf;
`;

const Title = styled.p`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #334680;
  margin-right: 2rem;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.7rem;
`;

const FullTime = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: #334680;
  padding: 0.5rem;
  border: 1px solid #334680;
  border-radius: 4px;
  text-align: center;
  margin-right: 2rem;
  min-width: 4rem;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const Days = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #b7bcce;
  margin-bottom: 3rem;
`;

const Description = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #334680;
  text-align: justify;

  a {
    color: #1e86ff;
    text-decoration: none;
  }
`;

const Back = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #1e86ff;
  cursor: pointer;
  margin-bottom: 4rem;
`;

const Apply = styled.div`
  height: auto;
  word-wrap: break-word;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #334680;

  a {
    color: #1e86ff;
    text-decoration: none;
  }
`;

const How = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #b9bdcf;
  margin-bottom: 2rem;
`;

export {
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
};
