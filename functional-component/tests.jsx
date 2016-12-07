import React from 'react';
import { shallow } from 'enzyme';

import Component from './index.jsx';

describe('given the Component component', () => {
    describe('when this', () => {
        const wrapper = shallow(
            <Component/>
        );
        it('then this', () => {
            const EXPECTED_RESULT = 1;
            const ACTUAL_RESULT = wrapper.find('');
            expect(ACTUAL_RESULT).toEqual(EXPECTED_RESULT);
        });
    });
});
