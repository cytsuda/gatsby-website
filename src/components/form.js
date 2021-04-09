import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { rgba, darken } from "polished";
import produce from "immer";

// Custom
import validateEmail from "@utils/validateEmail";
// Styled Var
import { colors, mediaQuery, fontFamily } from "@styles/styles";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  ${mediaQuery(
    "sm",
    css`
      grid-gap: 16px;
    `
  )}
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

const ErrorText = styled.span`
  position: absolute;
  bottom: -16px;
  font-size: 1.2rem;
  left: 0;
  color: ${colors.danger};
  font-weight: 700;
  font-style: italic;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.gray};
  font-family: ${fontFamily.poppins};
  transition: all 0.4s ease-in-out;
  cursor: pointer;
`;

const baseInputStyle = css`
  background-color: ${rgba(colors.white, .1)};
  border: none;
  padding: 8px 12px;
  transition: all 0.2s ease-in-out;
  outline: none;
  box-shadow: none;
  color: ${(props) =>
    props.isTouch
      ? props.isValid
        ? colors.primary
        : colors.danger
      : colors.white};
  border: 1px solid
    ${(props) =>
      props.isTouch
        ? props.isValid
          ? rgba(colors.primary, 0.25)
          : rgba(colors.danger, 0.75)
        : "rgba(255, 255, 255, 0.1)"};
  &:focus,
  &:active {
    box-shadow: ${(props) =>
      props.isTouch && !props.isValid
        ? `inset 0px 0px 4px ${rgba(colors.danger, 1)}`
        : `inset 0px 0px 4px ${rgba(colors.primary, 1)}`};
    border: ${(props) =>
      props.isTouch
        ? props.isValid
          ? `1px solid ${colors.primary}`
          : `1px solid ${colors.danger}`
        : `1px solid ${colors.primary}`};
  }
  & + ${Label} {
    color: ${(props) =>
      props.isTouch
        ? props.isValid
          ? colors.primary
          : colors.danger
        : colors.gray};
  }
  &:active + ${Label}, &:hover + ${Label}, &:focus + ${Label} {
    color: ${(props) =>
      props.isTouch && !props.isValid ? colors.danger : colors.primary};
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
  font-weight: 700;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: -2px 2px 4px ${rgba(colors.black, .25)};
  color: ${(props) => (props.type === "reset" ? colors.primary : colors.white)};
  background-color: ${(props) =>
    props.type === "reset" ? "transparent" : colors.primary};
  border: 1px solid ${colors.primary};

  &:hover {
    transform: translate(1px, -1px);
    box-shadow: -3px 3px 4px ${rgba(colors.black, .5)};
  }
  &:active {
    transform: translate(-1px, 1px);
    box-shadow: 0px 0px 1px ${rgba(colors.black, .25)};
  }
  &:disabled {
    background-color: ${(props) =>
      props.type === "reset" ? "transparent" : `${darken(0.65, colors.white)}`};
    color: ${darken(0.5, colors.white)};
    cursor: default;
    border-color: transparent;
    transform: translate(-1px, 1px);
    border-color: ${(props) =>
      props.type !== "reset" ? "transparent" : `${darken(0.65, colors.white)}`};
    box-shadow: ${(props) =>
      props.type === "reset"
        ? "none"
        : `0px 0px 4px ${rgba(colors.black, 0.25)}`};
  }
  ${mediaQuery("xxs", css`
    align-self: unset;
  `)}
`;
const ButtonsBox = styled.div`
  display: flex;
  grid-gap: 1.6rem;
  justify-content: flex-end;
  
  ${mediaQuery("sm", css`
    flex-direction: row-reverse;
  `)}
  ${mediaQuery("xxs", css`
    flex-direction: column-reverse;
  `)}
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
            <Button
              type="reset"
              onClick={handleReset}
              disabled={dataForm.findIndex((i) => i.value.length > 0) === -1}
            >
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
