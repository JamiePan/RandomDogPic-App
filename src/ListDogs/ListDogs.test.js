import React from 'react';
import  { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListDogs from './ListDogs';
import { Item } from './style';

configure ({adapter: new Adapter()});

//Unit Test
describe('<ListDogs />', () => {
    it('<ListDogs> can work', () => {
        const wrapper = shallow(<ListDogs URLs={["API1", "API2", "API3", "API4", "API5", "API6", "API7", "API8"]}/>);
        expect(wrapper.find(Item)).toHaveLength(8);
    })
})
