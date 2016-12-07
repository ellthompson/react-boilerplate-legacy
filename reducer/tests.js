import Reducer from './index.js';

describe('given the Reducer reducer', () => {
    const state = {
        foo:true,
        bar:false
    };
    describe('when called with FETCH_ACTION', () => {
        const action = {
            type: 'FETCH_ACTION'
        };
        const ACTUAL_RESULT = Reducer(state, action);
        it('should not remove old state', () => {
            expect(ACTUAL_RESULT.foo).toEqual(true);
            expect(ACTUAL_RESULT.bar).toEqual(false);
        });
        it('isFetching should be set to true', () => {
            expect(ACTUAL_RESULT.isFetching).toEqual(true);
        });
        it('isError should be set to false', () => {
            expect(ACTUAL_RESULT.isError).toEqual(false);
        });
    });
    describe('when called with FETCH_ACTION_SUCCESS', () => {
        const action = {
            type: 'FETCH_ACTION_SUCCESS'
        };
        const ACTUAL_RESULT = Reducer(state, action);
        it('should not remove old state', () => {
            expect(ACTUAL_RESULT.foo).toEqual(true);
            expect(ACTUAL_RESULT.bar).toEqual(false);
        });
        it('isFetching should be set to false', () => {
            expect(ACTUAL_RESULT.isFetching).toEqual(false);
        });
        it('isError should be set to true', () => {
            expect(ACTUAL_RESULT.isError).toEqual(true);
        });
    });
    describe('when called with FETCH_ACTION_FAILURE', () => {
        const action = {
            type: 'FETCH_ACTION_FAILURE'
        };
        const ACTUAL_RESULT = Reducer(state, action);
        it('should not remove old state', () => {
            expect(ACTUAL_RESULT.foo).toEqual(true);
            expect(ACTUAL_RESULT.bar).toEqual(false);
        });
        it('isFetching should be set to false', () => {
            expect(ACTUAL_RESULT.isFetching).toEqual(false);
        });
        it('isError should be set to true', () => {
            expect(ACTUAL_RESULT.isError).toEqual(true);
        });
    });
});
