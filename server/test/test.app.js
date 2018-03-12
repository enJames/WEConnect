import { assert } from 'chai';
import greeting from '../app';

describe('App', () => {
    it('greeting should return "Test is working"', () => {
        assert.equal(greeting(), 'Test is working');
    });
});
