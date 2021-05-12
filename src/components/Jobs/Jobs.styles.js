import styled from "styled-components";

const Container = styled.a`
  width: 100%;
  display: grid;
  margin-bottom: 2rem;
  height: auto;
  gap: 1rem;
  grid-template-rows: 100%;
  grid-template-columns: auto 1fr;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const Image = styled.img`
  width: 9rem;
  height: 9rem;
  border-radius: 4px;
  margin-right: 2rem;
  padding: 1rem;

  @media (max-width: 480px) {
    width: 8rem;
    height: 8rem;
    margin-right: 0;
    padding: 0.5rem;
  }
`;

const ContainerDescription = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 480px) {
    padding: 0.5rem;
    padding-left: 0;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Location = styled.p`
  margin: 0;
  margin-right: 4rem;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #b9bdcf;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 480px) {
    margin-right: 1rem;
  }
`;

const Days = styled.p`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #b9bdcf;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: #334680;
  margin-bottom: 1rem;
`;

const Position = styled.p`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #334680;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 15px;
  }
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

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export {
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
};
