import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';

chai.use(chaiHttp);
const { assert, should } = chai;
should();

describe('Test for businesses', () => {
    describe('when the user sends a GET request to /api/v1/businesses/', () => {
        it('It should return a 200 status and get all businesses', (done) => {
            chai.request(app)
                .get('/api/v1/businesses')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    assert.isArray(
                        res.body.businesses,
                        'it\'s an array'
                    );
                    assert.isString(
                        res.body.message,
                        'All businesses'
                    );
                    done();
                });
        });
    });

    describe('when the user sends a GET request to /api/v1/businesses/:businessId', () => {
        it('It should return a 200 status and retrive a business with id of 1', (done) => {
            chai.request(app)
                .get('/api/v1/businesses/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.business.should.be.a('object');
                    assert.isString(
                        res.body.message,
                        'Business found'
                    );
                    done();
                });
        });

        it('It should return a 404 status', (done) => {
            chai.request(app)
                .get('/api/v1/businesses/10')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    assert.isUndefined(
                        res.body.business,
                        'no business was retrieved'
                    );
                    assert.isString(
                        res.body.message,
                        'Business not found'
                    );
                    done();
                });
        });
    });
});
