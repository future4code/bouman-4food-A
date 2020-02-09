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
import AppBarComponent from "../../components/AppBarComponent";
import FormContainer from "../../components/FormContainer";
import { userSignup } from "../../actions/user";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirmPassword: '',
      }
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  onClickToSignup = (e) => {
    
    
    const { name, email, cpf, password, confirmPassword } = this.state.form
    
    //verifica se o usuário não inseriu apenas um espaço, aou invés de digitar um texto
    const nameIsValid = name && name.trim();
    const emailIsValid = email && email.trim();
    const cpfIsValid = cpf && cpf.trim();
    
    if(nameIsValid && emailIsValid && cpfIsValid && password !== ''){
      if (password === confirmPassword) {
        const signupData = {
          name,
          email,
          cpf,
          password
        }

        this.props.onSignup(signupData)
        
        this.setState({form: {
          name: '',
          email: '',
          cpf: '',
          password: '',
          confirmPassword: '',
        }})
      } else {
        window.alert("As senhas digitadas são diferentes.")
      }
    } else {
      window.alert("Insira dados válidos.")
    }
  }

  render() {
    const formSignUpData = [
      {
        label: "Nome",
        name: "name",
        placeholder: "Nome e sobrenome",
        required: true,
        type: "text",
        value: this.state.form.name,
        onChange: this.handleInputChange,
        autoComplete: 'name',
      },
      {
        label: "E-mail",
        name: "email",
        placeholder: "email@email.com",
        required: true,
        type: "email",
        value: this.state.form.email,
        onChange: this.handleInputChange,
        autoComplete: 'email',
      },
      {
        label: "CPF",
        name: "cpf",
        placeholder: "000.000.000-00",
        required: true,
        type: "text", //mudei para text por conta dos pontos e traço. Usar regex talvez?! Eloisa
        value: this.state.form.cpf,
        onChange: this.handleInputChange,
      },
      {
        label: "Senha",
        name: "password",
        placeholder: "Mínimo 6 caracteres",
        required: true,
        type: "password",
        value: this.state.form.password,
        onChange: this.handleInputChange,
      },
      {
        label: "Confirmar",
        name: "confirmPassword",
        placeholder: "Confirme a senha anterior",
        required: true,
        type: "password",
        value: this.state.form.confirmPassword,
        onChange: this.handleInputChange,
      }
    ];

    return (
      <div>
        <AppBarComponent
          imageDisplay={true}
          onClickButton={this.props.goToLoginPage} />
        <ImgContainer>
          <StyledImg src={FourFood} alt="Logo" />
          <h4>Cadastrar</h4>
        </ImgContainer>

        <FormContainer
          formInputs={formSignUpData}
          buttonText="Criar"
          onClickCriar={this.onClickToSignup}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  //goToSignUpAddress: () => dispatch(push(routes.signupPageAddress)),
  goToLoginPage: () => dispatch(push(routes.loginPage)),
  onSignup: (signupData) => dispatch(userSignup(signupData))
});

export default connect(null, mapDispatchToProps)(SignUpPage);
