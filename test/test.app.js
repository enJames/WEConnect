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
                .get('/api/v1/businesses/')
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

    describe('when the user sends a POST request to /api/v1/businesses/', () => {
        it('It should return a 201 status and create a new business', (done) => {
            chai.request(app)
                .post('/api/v1/businesses')
                .send({
                    company: 'Some Nigeria Limited',
                    category: 'Human Resources',
                    location: 'Lagos'
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    assert.isString(
                        res.body.message,
                        'Business created'
                    );
                    done();
                });
        });
    });

    describe('when the user sends an UPDATE request to /api/v1/businesses/:businessId', () => {
        it('It should return a 200 status and retrieve deleted business with id of 2', (done) => {
            chai.request(app)
                .put('/api/v1/businesses/2')
                .send({
                    company: 'Fife consult'
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.business.should.be.a('object');
                    assert.isString(
                        res.body.message,
                        'Business deleted'
                    );
                    done();
                });
        });
        it('It should return a 404 status if business does not exist', (done) => {
            chai.request(app)
                .put('/api/v1/businesses/35')
                .send({
                    company: 'Majid consult'
                })
                .end((err, res) => {
                    assert.equal(
                        res.body.message,
                        'Business not found'
                    );
                    done();
                });
        });
    });

    describe('when the user sends a DELETE request to /api/v1/businesses/:businessId', () => {
        it('It should return a 200 status and retrieve deleted business with id of 1', (done) => {
            chai.request(app)
                .delete('/api/v1/businesses/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.business.should.be.a('object');
                    assert.equal(
                        res.body.message,
                        'Business deleted'
                    );
                    done();
                });
        });

        it('It should return a 404 status when req.params is 40', (done) => {
            chai.request(app)
                .delete('/api/v1/businesses/40')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    assert.isUndefined(
                        res.body.business,
                        'business does not exist'
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

describe('Test for business reviews', () => {
    describe('when the user sends a POST request to /api/v1/businesses/:businessId/reviews', () => {
        it('It should return a 201 status and create a new review for the business', (done) => {
            const theReview = {
                businessId: 2,
                reviewer: 'Mary Akuluna',
                reviewText: 'I would do business with them over and over again'
            };

            chai.request(app)
                .post('/api/v1/businesses/2/reviews')
                .send(theReview)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    assert.equal(
                        res.body.message,
                        'Review created'
                    );
                    done();
                });
        });
    });

    describe('when the user sends a POST request to /api/v1/businesses/:businessId/reviews and the business does not exist', () => {
        it('It should return a 404 status', (done) => {
            let theBusinessIdNotFound;
            chai.request(app)
                .post('/api/v1/businesses/50/reviews', (req) => {
                    theBusinessIdNotFound = req.params.businessId;
                })
                .send({
                    businessId: theBusinessIdNotFound,
                    reviewer: 'Mary Akuluna',
                    reviewText: 'I would do business with them over and over again'
                })
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    assert.equal(
                        res.body.message,
                        'Business does not exist'
                    );
                    done();
                });
        });
    });

    describe('When the user sends a GET request to /api/v1/businesses/:businessId/reviews', () => {
        it('It should return a 200 status', (done) => {
            chai.request(app)
                .get('/api/v1/businesses/2/reviews')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it('It should return an object', (done) => {
            chai.request(app)
                .get('/api/v1/businesses/2/reviews')
                .end((err, res) => {
                    res.body.should.be.a('object');
                    done();
                });
        });

        it('It should state that businesses were found', (done) => {
            chai.request(app)
                .get('/api/v1/businesses/2/reviews')
                .end((err, res) => {
                    assert.equal(
                        res.body.message,
                        `Found ${res.body.allBusinessReviews.length} reviews`
                    );
                    assert.isAtLeast(
                        parseInt(res.body.allBusinessReviews.length, 10),
                        1
                    );
                    done();
                });
        });

        it('It should find atleast 1 business', (done) => {
            chai.request(app)
                .get('/api/v1/businesses/2/reviews')
                .end((err, res) => {
                    assert.isAtLeast(
                        parseInt(res.body.allBusinessReviews.length, 10),
                        1
                    );
                    done();
                });
        });
    });
});

describe('Test for filter feature', () => {
    describe('Location Filter: When user sends a GET filter request to /api/v1/businesses?location=<location>', () => {
        it('It should return a 200 status code', (done) => {
            chai.request(app)
                .get('/api/v1/businesses?location=Lagos')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it('It should return an array', (done) => {
            chai.request(app)
                .get('/api/v1/businesses?location=Lagos')
                .end((err, res) => {
                    assert.isArray(res.body.result, 'Result is array');
                    done();
                });
        });

        it('It should return atleast 1 business if there are registered businesses in the search query location', (done) => {
            chai.request(app)
                .get('/api/v1/businesses?location=Lagos')
                .end((err, res) => {
                    assert.isAtLeast(res.body.result.length, 1);
                    done();
                });
        });
        it('It should return "No registered business in this location" if there are no registered businesses in the search query location', (done) => {
            chai.request(app)
                .get('/api/v1/businesses?location=Kafanchan')
                .end((err, res) => {
                    assert.equal(res.body.message, 'No registered business in the location "Kafanchan"');
                    done();
                });
        });
    });

    describe('Category Filter: When user sends a GET filter request to /api/v1/businesses?category=<category>', () => {
        it('It should return a 200 status code', (done) => {
            chai.request(app)
                .get('/api/v1/businesses?category=Hospitality')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it('It should return an array', (done) => {
            chai.request(app)
                .get('/api/v1/businesses?category=Hospitality')
                .end((err, res) => {
                    assert.isArray(res.body.result, 'Result is array');
                    done();
                });
        });

        it('It should return atleast 1 business if there are registered businesses in the search query category', (done) => {
            chai.request(app)
                .get('/api/v1/businesses?category=Hospitality')
                .end((err, res) => {
                    assert.isAtLeast(res.body.result.length, 1);
                    done();
                });
        });
        it('It should return "No registered business in the category <category>" if there are no registered businesses in the search query category', (done) => {
            chai.request(app)
                .get('/api/v1/businesses?category=Entertainment')
                .end((err, res) => {
                    assert.equal(res.body.message, 'No registered business in the category "Entertainment"');
                    done();
                });
        });
    });
});

describe('Test for Users feature', () => {
    describe('User Sign Up: When user sends a POST signup request to /api/v1/auth/signup', () => {
        it('It should return a 201 status if NO details entered already exists', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send({
                    firstname: 'Muskule',
                    lastname: 'Damalin',
                    email: 'new@new.com'
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
        it('It should return a 400 status if atleast 1 detail already exist', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send({
                    firstname: 'Muskule',
                    lastname: 'Damalin',
                    email: 'mailing@email.com'
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
        it('It should return an object', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send({
                    firstname: 'Muskule',
                    lastname: 'Damalin',
                    email: 'new@new.com'
                })
                .end((err, res) => {
                    assert.isObject(res.body, 'Is Obejct');
                    done();
                });
        });
        it('It should return a success message of "Registration successful!"', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send({
                    firstname: 'Muskule',
                    lastname: 'Damalin',
                    email: 'new@new.com'
                })
                .end((err, res) => {
                    assert.equal(res.body.message, 'Registration successful!');
                    done();
                });
        });
    });
    describe('User Login: When user sends a POST login request to /api/v1/auth/signup', () => {
        it('It should return a 200 status if users credentials match any registered user', (done) => {
            chai.request(app)
                .post('/api/v1/auth/login')
                .send({
                    email: 'mailing@email.com',
                    password: 'user5678'
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it('It should return a 404 status if credentials DO NOT match any registered user', (done) => {
            chai.request(app)
                .post('/api/v1/auth/login')
                .send({
                    email: 'mailing@email.com',
                    password: 'usee5678'
                })
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
        it('It should return an object', (done) => {
            chai.request(app)
                .post('/api/v1/auth/login')
                .send({
                    email: 'mailing@email.com',
                    password: 'user5678'
                })
                .end((err, res) => {
                    assert.isObject(res.body, 'Is Obejct');
                    done();
                });
        });
        it('It should return a success message of "Login successful!"', (done) => {
            chai.request(app)
                .post('/api/v1/auth/login')
                .send({
                    email: 'mailing@email.com',
                    password: 'user5678'
                })
                .end((err, res) => {
                    assert.equal(res.body.message, 'Login successful!');
                    done();
                });
        });
    });
});
