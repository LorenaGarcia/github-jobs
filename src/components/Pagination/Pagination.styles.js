import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.page ? "default" : "pointer")};
  border: ${(props) =>
    props.page ? "1px solid #1E86FF" : "1px solid #b7bcce"};
  box-sizing: border-box;
  border-radius: 4px;
  width: 36px;
  height: 36px;
  color: ${(props) => (props.page ? "#FFFFFF" : "#b7bcce")};
  margin-left: ${(props) => (props.page ? "1rem" : "none")};
  margin-right: ${(props) => (props.page ? "1rem" : "none")};
  background-color: ${(props) => (props.page ? "#1E86FF" : "none")};

  :hover {
    border: ${(props) =>
      props.page ? "1px solid #1E86FF" : "1px solid #1E86FF"};
    color: ${(props) => (props.page ? "#FFFFFF" : "#1E86FF")};
  }
`;

export { Container, Button };
