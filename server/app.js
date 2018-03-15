/* jshint esversion: 6 */
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('./template/pages/index.html');
});


app.listen(1447, () => {
    console.log('Now listening on 1447');
});
