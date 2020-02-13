import React from 'react';
import FormContainer from '../../components/FormContainer';
import AppBarComponent from '../../components/AppBarComponent';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { updateProfile } from '../../actions/user';

export class EditUserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: this.props.users.name,
        email: this.props.users.email,
        cpf: this.props.users.cpf,
      }
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    } else {

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
        name: 'name',
        placeholder: "Nome",
        autoComplete: 'name',
        //autofocus: ,
        value: this.state.form.name,
        onChange: this.handleInputChange,
      },
      {
        label: 'E-mail',
        name: 'email',
        placeholder: 'email@email.com',
        autoComplete: 'email',
        value: this.state.form.email,
        onChange: this.handleInputChange,
      },
      {
        label: 'CPF',
        name: 'cpf',
        placeholder: '000.000.000-00',
        value: this.state.form.cpf,
        onChange: this.handleInputChange,
      },
    ]

    return (
      <div>
        <AppBarComponent
          imageDisplay={true}
          onClickButton={this.props.goToProfile}
          title='Editar'
        />
        <FormContainer
          formInputs={formInputsData}
          buttonText="Salvar"
          onClickCriar={this.props.updateProfile}
          form={this.state.form}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.allUsers
})

function mapDispatchToProps(dispatch) {
  return {
    goToProfile: () => dispatch(push(routes.userProfile)),
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    updateProfile: (form) => dispatch(updateProfile(form))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile);