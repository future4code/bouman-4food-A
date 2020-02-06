import React from "react";
import FormContainer from "../../components/FormContainer";
import AppBarComponent from "../../components/AppBarComponent";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

export class EditUserAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        teste: ''
      }
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  componentDidMount(){
    const token = window.localStorage.getItem("token")
    if(token === null){
      this.props.goToLoginPage()
    }else{
      
    }
  }

  render() {
    const formInputsData = [
      {
        label: "Logradouro",
        name: "logradouro",
        placeholder: "Logradouro",
        value: this.state.form.logradouro,
        onChange: this.handleInputChange,
        //type: ,
        //required:,
      },
      {
        label: "Número",
        name: "numero",
        placeholder: "Número",
        autoComplete: "number",
        value: this.state.form.numero,
        onChange: this.handleInputChange
      },
      {
        label: "Complemento",
        name: "complemento",
        placeholder: "Apto. / Bloco",
        value: this.state.form.complemento,
        onChange: this.handleInputChange
      },
      {
        label: "Bairro",
        name: "bairro",
        placeholder: "Bairro",
        value: this.state.form.bairro,
        onChange: this.handleInputChange
      },
      {
        label: "Cidade",
        name: "cidade",
        placeholder: "Cidade",
        value: this.state.form.cidade,
        onChange: this.handleInputChange
      },
      {
        label: "Estado",
        name: "estado",
        placeholder: "Estado",
        value: this.state.form.estado,
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
        <FormContainer formInputs={formInputsData} buttonText="Salvar" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToProfile: () => dispatch(push(routes.userProfile)),
    goToLoginPage: () => dispatch(push(routes.loginPage))
  }
}

export default connect(null, mapDispatchToProps)(EditUserAddress);
