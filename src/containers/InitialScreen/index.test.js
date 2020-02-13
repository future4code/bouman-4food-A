import React from "react";
import renderer from "react-test-renderer";
import { RectangleMain, mapDispatchToProps } from "./index"

describe("Testar o InitialScreen", ()=>{
    test("Snapshot", ()=>{
        const tree = renderer.create(<RectangleMain />).toJSON();
        expect(tree).toMatchSnapshot();
    })  
})

describe('mapDispatchToProps', () => {
    it('Testa se o mapDispatchToProps foi chamado', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).goToLoginPage();
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});

