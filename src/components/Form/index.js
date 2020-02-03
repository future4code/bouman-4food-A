import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

export const FormSection = styled.form`
  height: 576px;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormTitle = styled.div`
  width: 360px;
  height: 42px;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
`

export const FormInput = styled(TextField)`
  &.form {
    width: 100%;
    margin: 8px 0;
}
`

export const FormButton = styled(Button)`
&.form {
  width: 100%;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
  margin: 8px 0;
}
`