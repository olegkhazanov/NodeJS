const requrest = require('express');

var app = express('.server').app;

it('should return hello world response', (done) =>{
    request(app)
    .get('/')
    .expect('Hello world')
    .end(done);
});

