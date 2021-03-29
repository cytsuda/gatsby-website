import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import produce from "immer";

// Custom
import validateEmail from "@utils/validateEmail";

//  - green
const colorGreen = "#1BB385";
// #d0463c - red
const colorRed = "#d0463c";
const colorNeutra = "#b3bccb";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

const ErrorText = styled.span`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-size: 12px;
  color: ${colorRed};
  font-weight: 700;
`;
const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #b3bccb;
  font-family: "Poppins", sans-serif;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
`;
// ${(props) => props.isValid && props.isTouch}
// ${(props) => props.isValid ? "#1bb385" : props.isTouch ? "#e74c3c" : "white"}
const baseInputStyle = css`
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  padding: 8px 12px;
  transition: all 0.2s ease-in-out;
  outline: none;
  box-shadow: none;
  color: ${(props) =>
    props.isTouch ? (props.isValid ? colorGreen : colorRed) : "white"};
  border: 1px solid rgba(255, 255, 255, 0.1);
  &:focus,
  &:active {
    box-shadow: ${(props) =>
      props.isTouch && !props.isValid
        ? `inset 0px 0px 4px ${rgba(colorRed, 1)}`
        : `inset 0px 0px 4px ${rgba(colorGreen, 1)}`};
    border: ${(props) =>
      props.isTouch
        ? props.isValid
          ? `1px solid ${colorGreen}`
          : `1px solid ${colorRed}`
        : "1px solid rgba(255, 255, 255, 0.1)"};
  }
  & + ${Label} {
    color: ${(props) =>
      props.isTouch ? (props.isValid ? colorGreen : colorRed) : colorNeutra};
  }
  &:active + ${Label}, &:hover + ${Label}, &:focus + ${Label} {
    color: ${(props) =>
      props.isTouch && !props.isValid ? colorRed : colorGreen};
  }
`;

const Input = styled.input`
  ${baseInputStyle}
`;
const TextArea = styled.textarea`
  ${baseInputStyle}
  resize: none;
`;

const Button = styled.button`
  align-self: center;
  padding: 8px 32px 10px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
  color: ${(props) => (props.type === "reset" ? "#1bb385" : "white")};
  background-color: ${(props) =>
    props.type === "reset" ? "transparent" : "#1bb385"};
  border: 2px solid #1bb385;
  &:hover {
    transform: translate(1px, -1px);
    box-shadow: -3px 3px 4px rgba(0, 0, 0, 0.5);
  }
  &:active {
    transform: translate(-1px, 1px);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    background-color: #777;
    color: #aaa;
    cursor: default;
    border-color: transparent;
    transform: translate(-1px, 1px);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  }
`;
const ButtonsBox = styled.div`
  display: flex;
  grid-gap: 16px;
  justify-content: flex-end;
`;

const formStructure = (info) => {
  let result = info.map((item) => ({
    ...item,
    value: "",
    touch: false,
    valid: false,
  }));
  return result;
};

const verifyValid = (data) => {
  const valid = data.findIndex((i) => i.valid === false);
  if (valid === -1) return true;
  else return false;
};

const FormComponent = (props) => {
  const { data, btnMsg } = props;
  const [validForm, setValidForm] = useState(false);
  const [sended, setSended] = useState(false);
  const [dataForm, setDataForm] = useState(formStructure(data));

  useEffect(() => {
    const valid = verifyValid(dataForm);
    setValidForm(valid);
  }, [dataForm]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSended(true);
  };
  const handleChangeValue = (e) => {
    const foundIndex = dataForm.findIndex((i) => i.name === e.target.name);
    setDataForm((prev) =>
      produce(prev, (draft) => {
        draft[foundIndex].touch = true;
        draft[foundIndex].value = e.target.value;
        // e.target.value.length > 0 ? prev[foundIndex].type === "email" && validateEmail(e.target.value)

        draft[foundIndex].valid = e.target.value.length < 0;
        if (prev[foundIndex].type === "email") {
          draft[foundIndex].valid = validateEmail(e.target.value);
        } else if (e.target.value.length > 0) {
          draft[foundIndex].valid = true;
        } else {
          draft[foundIndex].valid = false;
        }
      })
    );
  };
  const handleReset = () => {
    setDataForm((prev) => formStructure(prev));
  };
  if (data.length <= 0) return <h1>Problema com o formulário</h1>;
  return (
    <>
      {sended ? (
        <h1>Mensagem enviada.</h1>
      ) : (
        <Form onSubmit={submitHandler}>
          {dataForm.map((item, KEY) => (
            <InputContainer key={KEY}>
              {!item.valid &&
                item.touch &&
                (item.value.length <= 0 ? (
                  <ErrorText>Esse campo é obrigatório.</ErrorText>
                ) : (
                  item.type === "email" && (
                    <ErrorText>Exp.: meu_email@mail.com.br</ErrorText>
                  )
                ))}
              {item.type === "textarea" ? (
                <TextArea
                  type={item.type}
                  placeholder={item.placeholder}
                  name={item.name}
                  id={item.name}
                  rows={item.rows}
                  value={item.value}
                  onChange={handleChangeValue}
                  isValid={item.valid}
                  isTouch={item.touch}
                />
              ) : (
                <Input
                  type={item.type}
                  placeholder={item.placeholder}
                  name={item.name}
                  id={item.name}
                  value={item.value}
                  onChange={handleChangeValue}
                  isValid={item.valid}
                  isTouch={item.touch}
                />
              )}
              <Label htmlFor={item.name}>{item.label}</Label>
            </InputContainer>
          ))}
          <ButtonsBox>
              <Button type="reset" onClick={handleReset} disabled={dataForm.findIndex(i=>i.value.length>0)===-1}>
              Limpar
            </Button>
            <Button onClick={submitHandler} disabled={!validForm}>
              {btnMsg}
            </Button>
          </ButtonsBox>
        </Form>
      )}
    </>
  );
};

export default FormComponent;
