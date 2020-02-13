import React from "react";
import renderer from "react-test-renderer";
import { mapDispatchToProps, LoginPage } from "./index"
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import {shallow, mount} from 'enzyme'

describe("Testar o InitialScreen", ()=>{
    test("Snapshot", ()=>{
        const tree = renderer.create(<Container />).toJSON();
        expect(tree).toMatchSnapshot();
    })  
})

describe('mapDispatchToProps', () => {
    it('Testa se o mapDispatchToProps foi chamado', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).goToSignUp();
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});
describe('mapDispatchToProps', () => {
    it('Testa se o mapDispatchToProps foi chamado', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).goToRestaurantFeed();
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});

describe('mapDispatchToProps', () => {
    it('Testa se o mapDispatchToProps foi chamado', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).login();
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});


describe('Testa componente LoginPage', () => {
	test('Deve chamar a funcao handleOnSubmit quando clicar no botao', () => {
		// Preparacao
		const onButtonMock = jest.fn()
		const component = shallow(<Button  onClick={onButtonMock} />)

		/* const onButton = component.find(Button) */
		// Execucao
		component.simulate('click')

		// Verficacao
		expect(onButtonMock).toHaveBeenCalledTimes(1)
 	})
 })

