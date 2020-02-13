import React from "react";
import FormContainer from "../../components/FormContainer";
import AppBarComponent from "../../components/AppBarComponent";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { addAddress, fetchFullAddress } from "../../actions/user";


export class EditUserAddress extends React.Component {
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

  componentDidMount(){
    const token = window.localStorage.getItem("token")
    if(token === null){
      this.props.goToLoginPage()
    }else{
      this.props.onEditAddress();
     
    }
  }

  componentDidUpdate(el){
    if(el.editAddress !== this.props.editAddress){
      this.setState({form: this.props.editAddress})
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  onClickCriar = (e) =>{
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
      
    } else {
      window.alert("Insira dados válidos.")
    }
  }
    
  render() {
    const formInputsData = [
      {
        label: "Logradouro",
        name: "street",
        placeholder: "Logradouro",
        value: this.state.form.street,
        onChange: this.handleInputChange,
      
        //type: ,
        //required:,
      },
      {
        label: "Número",
        name: "number",
        placeholder: "Número",
        autoComplete: "number",
        value: this.state.form.number,
        onChange: this.handleInputChange
      },
      {
        label: "Complemento",
        name: "complement",
        placeholder: "Apto. / Bloco",
        value: this.state.form.complement,
        onChange: this.handleInputChange
      },
      {
        label: "Bairro",
        name: "neighbourhood",
        placeholder: "Bairro",
        value: this.state.form.neighbourhood,
        onChange: this.handleInputChange
      },
      {
        label: "Cidade",
        name: "city",
        placeholder: "Cidade",
        value: this.state.form.city,
        onChange: this.handleInputChange
      },
      {
        label: "Estado",
        name: "state",
        placeholder: "Estado",
        value: this.state.form.state,
        onChange: this.handleInputChange
      }
    ];

    return (
      <div>
        <AppBarComponent
          imageDisplay={true}
          onClickButton={this.props.goToProfile}
          title='Endereço'
        />
        <FormContainer formInputs={formInputsData} buttonText="Salvar" onClickCriar={this.onClickCriar}/>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  editAddress: state.users.allAddress
})

const mapDispatchToProps = (dispatch) => ({
    goToProfile: () => dispatch(push(routes.userProfile)),
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    onSaveAddress: (addressData) => dispatch(addAddress(addressData)),
    onEditAddress: () => dispatch(fetchFullAddress()),
  })


export default connect(mapStateToProps, mapDispatchToProps)(EditUserAddress);
