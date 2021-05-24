import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 55px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  border: none;
  padding-left: 2.5rem;

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
`;

const Icon = styled.div`
  position: absolute;
  color: #b9bdcf;
  margin-left: 0.5rem;
`;

const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #b9bdcf;
  margin-top: 2rem;
`;

const RadioButton = styled.div`
  margin-left: 1rem;
  margin-bottom: 1rem;
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #b9bdcf;
    border-radius: 100%;
    background: #fff;
  }

  [type="radio"]:checked + label:before {
    border: 1px solid #1e86ff;
  }

  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: #1e86ff;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;

  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: absolute;
    visibility: hidden;
  }
  [type="checkbox"]:not(:checked) + label,
  [type="checkbox"]:checked + label {
    position: relative;
    padding-left: 2.3em;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #334680;
    line-height: 1.7;
    cursor: pointer;
  }

  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #aaa;
    background: #fff;
    border-radius: 0.2em;
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  [type="checkbox"]:not(:checked) + label:after,
  [type="checkbox"]:checked + label:after {
    content: "x";
    position: absolute;
    top: 0.525em;
    left: 0.35em;
    font-size: 1.375em;
    color: #1e86ff;
    line-height: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  [type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0) rotate(45deg);
    transform: scale(0) rotate(45deg);
  }

  [type="checkbox"]:checked + label:before {
    border: 1px solid #1e86ff;
  }
`;

export { Container, ContainerInput, Input, Icon, Title, RadioButton, CheckBox };
