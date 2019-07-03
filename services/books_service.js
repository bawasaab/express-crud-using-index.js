// var Book = require('../models').book;
var Book = require('../models/book');


const findAll = async () => {
    try {

        let result = await Book.find();
        return result;

    } catch(ex) {

        return ex;
    }
}

module.exports = {
    findAll
};