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
import { addAddress } from "../../actions/user";

class SignUpPageAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
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

  onClickToSaveAddress = (e) => {
    e.preventDefault();
    
    const { street, number, complement, neighbourhood, city, state } = this.state.form
    
    //verifica se o usuário não inseriu apenas um espaço, aou invés de digitar um texto
    const streetIsValid = street && street.trim();
    const numberIsValid = number && number.trim();
    const neighbourhoodIsValid = neighbourhood && neighbourhood.trim();
    const cityIsValid = city && city.trim();
    const stateIsValid = state && state.trim();
    
    if(streetIsValid && numberIsValid && neighbourhoodIsValid && cityIsValid && stateIsValid) {
      const addressData = {
        street,
        number,
        neighbourhood,
        city,
        state,
        complement,
      }

      this.props.onSaveAddress(addressData)
      
      this.setState({ form: {
        street: "",
        number: "",
        complement: "",
        neighbourhood: "",
        city: "",
        state: ""
      }})
      
    } else {
      window.alert("Insira dados válidos.")
    }
  }

  render() {
    return (
      <div>
        <FormSection onSubmit={this.onClickToSaveAddress}>
          <FormTitle>Meu endereço</FormTitle>
          <FormInput
            classes={{ root: "form" }}
            name="street"
            label="Logradouro"
            placeholder="Rua / Av."
            variant="outlined"
            value={this.state.form.street}
            onChange={this.handleInputChange}
            required
          />
          <FormInput
            classes={{ root: "form" }}
            name="number"
            label="Número"
            placeholder="Número"
            variant="outlined"
            value={this.state.form.number}
            onChange={this.handleInputChange}
            required
          />
          <FormInput
            classes={{ root: "form" }}
            name="complement"
            label="Complemento"
            placeholder="Apto. / Bloco"
            variant="outlined"
            value={this.state.form.complement}
            onChange={this.handleInputChange}
          />
          <FormInput
            classes={{ root: "form" }}
            name="neighbourhood"
            label="Bairro"
            placeholder="Bairro"
            variant="outlined"
            value={this.state.form.neighbourhood}
            onChange={this.handleInputChange}
            required
          />
          <FormInput
            classes={{ root: "form" }}
            name="city"
            label="Cidade"
            placeholder="Cidade"
            variant="outlined"
            value={this.state.form.city}
            onChange={this.handleInputChange}
            required
          />
          <FormInput
            classes={{ root: "form" }}
            name="state"
            label="Estado"
            placeholder="Estado"
            variant="outlined"
            value={this.state.form.state}
            onChange={this.handleInputChange}
            required
          />
          <FormButton
            classes={{ root: "form" }}
            variant="contained"
            color="primary"
            type='submit'
          >
            Salvar
          </FormButton>
        </FormSection>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  onSaveAddress: (addressData) => dispatch(addAddress(addressData))
});

export default connect(null, mapDispatchToProps)(SignUpPageAddress);
