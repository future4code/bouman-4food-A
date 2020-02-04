import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FourFood from "../../images/logo-future-eats-invert.svg";
import {
  StyledImg,
  CreateUserContainer,
  ImgContainer
} from "../../style/styled";
import AppBarComponent from "../../components/AppBar/AppBar";
import FormContainer from "../../components/FormContainer";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  render() {
    const formSignUpData = [
      {
        label: "Nome",
        name: "nome",
        placeholder: "Nome e sobrenome",
        required: true,
        type: "text"
      },
      {
        label: "E-mail",
        name: "email",
        placeholder: "email@email.com",
        required: true,
        type: "email"
      },
      {
        label: "CPF",
        name: "cpf",
        placeholder: "000.000.000-00",
        required: true,
        type: "number"
      },
      {
        label: "Senha",
        name: "senha",
        placeholder: "Minico 6 caracteres",
        required: true,
        type: "password"
      },
      {
        label: "Confirmar",
        name: "confirmar",
        placeholder: "Confirme a senha anterior",
        required: true,
        type: "password"
      }
    ];

    return (
      <div>
        <AppBarComponent onClickButton={this.props.goToLoginPage} />
        <ImgContainer>
          <StyledImg src={FourFood} alt="Logo" />
          <h4>Cadastrar</h4>
        </ImgContainer>

        <FormContainer
          formInputs={formSignUpData}
          buttonText="Criar"
          onClickCriar={this.props.goToSignUpAddress}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToSignUpAddress: () => dispatch(push(routes.signupPageAddress)),
  goToLoginPage: () => dispatch(push(routes.loginPage))
});

export default connect(null, mapDispatchToProps)(SignUpPage);
