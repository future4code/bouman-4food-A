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

// describe('mapDispatchToProps', () => {
//     it('Testa se o mapDispatchToProps foi chamado', () => {
//         //preparação
//         const mock = {
//             email:"astrodev@future4.com",
//             password:"123456"
//         };
//         //execução
//         const action 

//         mapDispatchToProps(dispatch).login();
//         expect(dispatch).toHaveBeenCalledTimes(1);
//     });
// });



