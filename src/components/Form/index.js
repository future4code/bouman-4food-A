import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

export const FormDiv = styled.div`
  margin: auto;
  max-width: 480px;
`

export const FormSection = styled.form`
  height: 576px;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const FormTitle = styled.div`
  width: 360px;
  height: 42px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
`

export const FormInput = styled(TextField)`
  &.form {
    width: 100%;
    margin: 8px 0;
  }
`

export const FormButton = styled(Button)`
&.form {
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
  width: 100%;
  margin: 8px 0;
}
`