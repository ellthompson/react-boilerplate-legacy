import 'isomorphic-fetch';

import getData from './index.js';

describe('Given the getData ajax', () => {
    let ACTUAL_RESULT;

    beforeEach((done) => {
        fetchMock.get(
            "http://localhost:5001/api/data/",
            {
                body: {
                    foo: 'bar'
                },
                status: 200
            }
        );

        getData((result) => {
            ACTUAL_RESULT = result;
            done();
        });
    });

    afterEach(() => {
        fetchMock.restore();
    });

    it('when a successful call is made', () => {
        expect(ACTUAL_RESULT).toEqual({foo: 'bar'});
    });
});
