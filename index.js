const bph = require('./src/brainly.js');

const Brainly = async (query, count) => {
    let response = await bph(query, count).catch(error => {
        return {
            'success': false,
            'message': error,
        };
    });

    return response;
};

module.exports = Brainly
