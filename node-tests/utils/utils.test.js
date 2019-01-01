const utils = require('./utils')

it('should add two numbers', () =>{
    var res = utils.add(33, 11);
    //console.log(res === 44 ? 'Pass' : 'Failed');

    if (res !== 44) {
        throw new Error ('Value not added');
    }
    
});

it('should fail add two numbers', () =>{
    var res = utils.add(33, 1);
    //console.log(res === 55 ? 'Pass' : 'Failed');

    if (res !== 44) {
        throw new Error (`Expected 44 but ${res}`);
    }
    
});