import React from 'react';
import FormContainer from '../../components/FormContainer';

export class EditUserProfile extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      form: {
        nome: '',
        email: '',
        cpf: '',
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
        label: 'Nome',
        name: 'nome',
        placeholder: "Nome",
        autoComplete: 'name',
        //autofocus: ,
        value: this.state.form.nome,
        onChange: this.props.handleInputChange,
      },
      {
        label: 'E-mail',
        name: 'email',
        placeholder: 'email@email.com',
        autoComplete: 'email',
        value: this.state.form.email,
        onChange: this.props.handleInputChange,
      },
      {
        label: 'CPF',
        name: 'cpf',
        placeholder: '000.000.000-00',
        value: this.state.form.cpf,
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

export default EditUserProfile;