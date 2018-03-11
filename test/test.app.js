import { assert } from 'chai';
import greeting from '../app';

describe('App', () => {
    it('greeting should return "its working"', () => {
        assert.equal(greeting(), 'its working');
    });
});
