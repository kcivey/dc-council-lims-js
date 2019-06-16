const Client = require('./lib/client');

module.exports = {
    Client,
    createClient(options) {
        return new Client(options);
    },
};
