import express from 'express';

const app = express();

const greeting = () => 'Test is working';

app.listen(1447, () => {
    console.log('Now listening on 1447');
});

export default greeting;
