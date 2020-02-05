import React from 'react';
import {Footer} from './index';
import renderer from "react-test-renderer";


it('footer renders correctly', () => {
    
        const tree = renderer
            .create(<Footer/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    
})
