import React from 'react';
import FormContainer from '../../components/FormContainer';

export class EditUserAddress extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      form: {
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
      }
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ form: { ...this.state.form, [name]: value } })
  }

  render() {
    const formInputsData = [
      {
        label: 'Logradouro',
        name: 'logradouro',
        placeholder: "Logradouro",
        value: this.state.form.logradouro,
        onChange: this.props.handleInputChange,
      },
      {
        label: 'Número',
        name: 'numero',
        placeholder: 'Número',
        autoComplete: 'number',
        value: this.state.form.numero,
        onChange: this.props.handleInputChange,
      },
      {
        label: 'Complemento',
        name: 'complemento',
        placeholder: 'Apto. / Bloco',
        value: this.state.form.complemento,
        onChange: this.props.handleInputChange,
      },
      {
        label: 'Bairro',
        name: 'bairro',
        placeholder: "Bairro",
        value: this.state.form.bairro,
        onChange: this.props.handleInputChange,
      },      {
        label: 'Cidade',
        name: 'cidade',
        placeholder: "Cidade",
        value: this.state.form.cidade,
        onChange: this.props.handleInputChange,
      },      {
        label: 'Estado',
        name: 'estado',
        placeholder: "Estado",
        value: this.state.form.estado,
        onChange: this.props.handleInputChange,
      },
    ]
    
    return (
      <div>
        <FormContainer
          formInputs={formInputsData}
          buttonText="Salvar"
        />
      </div>
    )
  }
}

export default EditUserAddress;