import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${"/images/background.png"});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const ContainerInput = styled.div`
  width: 100%;
  height: 10rem;
  padding: 0rem 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0rem 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 55px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  padding-left: 2.5rem;
  padding-right: 10rem;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #334680;

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #b9bdcf;
  }

  @media (max-width: 480px) {
    padding-right: 6.5rem;
  }
`;

const Icon = styled.div`
  position: absolute;
  color: #b9bdcf;
  margin-left: 0.5rem;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  margin-right: 8.7rem;
  width: 146px;
  height: 50px;
  border: 0;
  background: #1e86ff;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;

  @media (max-width: 480px) {
    margin-right: 2.2rem;
    width: 90px;
    font-size: 12px;
  }
`;

export { Container, ContainerInput, Input, Icon, Button };
