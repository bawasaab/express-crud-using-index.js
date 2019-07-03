var bookService = require('../services').bookService;


const findAll = async ( req, res, next ) => {
    try {
console.log('try');
        let result = await bookService.findAll();
console.log('result', result);

        return res.send({
            status: 200,
            msg: 'Records found',
            data: result
        });

    } catch(ex) {
        console.log('catch');

        return res.send({
            status: 400,
            msg: 'Exception occur',
            data: ex
        });
    }
}

module.exports = {
    findAll
};