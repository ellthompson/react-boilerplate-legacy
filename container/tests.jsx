import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Container from './index.jsx';

const storeFake = (state) => ({
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({ ...state })
});

describe('given the Container component', () => {
    describe('when this', () => {
        const store = storeFake({
            foo: 'bar'
        });
        const wrapper = mount(
            <Provider store={store}>
                <Container/>
            </Provider>
        );
        it('then this', () => {
            const EXPECTED_RESULT = 1;
            const ACTUAL_RESULT = wrapper.find('');
            expect(ACTUAL_RESULT).toEqual(EXPECTED_RESULT);
        });
    });
});
