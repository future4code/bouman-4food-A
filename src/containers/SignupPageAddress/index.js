import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import {
  FormSection,
  FormTitle,
  FormInput,
  FormButton
} from "../../components/Form";

class SignUpPageAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: ""
      }
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  render() {
    return (
      <div>
        <FormSection>
          <FormTitle>Meu endereço</FormTitle>
          <FormInput
            classes={{ root: "form" }}
            name="logradouro"
            label="Logradouro*"
            placeholder="Rua / Av."
            variant="outlined"
            value={this.state.form.logradouro}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="numero"
            label="Número*"
            placeholder="Número"
            variant="outlined"
            value={this.state.form.numero}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="complemento"
            label="Complemento"
            placeholder="Apto. / Bloco"
            variant="outlined"
            value={this.state.form.complemento}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="bairro"
            label="Bairro*"
            placeholder="Bairro"
            variant="outlined"
            value={this.state.form.bairro}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="cidade"
            label="Cidade*"
            placeholder="Cidade"
            variant="outlined"
            value={this.state.form.cidade}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="estado"
            label="Estado*"
            placeholder="Estado"
            variant="outlined"
            value={this.state.form.estado}
            onChange={this.handleInputChange}
          />
          <FormButton
            classes={{ root: "form" }}
            variant="contained"
            color="primary"
          >
            Salvar
          </FormButton>
        </FormSection>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed))
});

export default connect(null, mapDispatchToProps)(SignUpPageAddress);
