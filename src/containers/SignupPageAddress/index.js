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
      address: {
        street: "",
        number: "",
        complement: "",
        neighbourhood: "",
        city: "",
        state: ""
      }
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ address: { ...this.state.address, [name]: value } });
  };

  render() {
    return (
      <div>
        <FormSection>
          <FormTitle>Meu endereço</FormTitle>
          <FormInput
            classes={{ root: "form" }}
            name="street"
            label="Logradouro*"
            placeholder="Rua / Av."
            variant="outlined"
            value={this.state.form.logradouro}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="number"
            label="Número*"
            placeholder="Número"
            variant="outlined"
            value={this.state.form.numero}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="complement"
            label="Complemento"
            placeholder="Apto. / Bloco"
            variant="outlined"
            value={this.state.form.complemento}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="neighbourhood"
            label="Bairro*"
            placeholder="Bairro"
            variant="outlined"
            value={this.state.form.bairro}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="city"
            label="Cidade*"
            placeholder="Cidade"
            variant="outlined"
            value={this.state.form.cidade}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="state"
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
            onClick={console.log(this.state.address)}
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
