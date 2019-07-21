const request = require('request-promise-native');
const clientDefaultOptions = {
    request,
    baseUrl: 'http://lims.dccouncil.us/api/v1/',
    minInterval: 3000, // 3 sec, as requested by DC OCTO: https://octo.dc.gov/node/1166991
};
let previousRequestTime = 0;

class Client {

    constructor(options = {}) {
        for (const name of Object.keys(options)) {
            if (!clientDefaultOptions.hasOwnProperty(name)) {
                throw new Error(`Invalid client option "${name}"`);
            }
        }
        this.options = Object.assign({}, clientDefaultOptions, options);
    }

    // Wait long enough between requests (not useful except privately)
    pause(result) {
        const now = Date.now();
        const delay = Math.max(this.options.minInterval - now + previousRequestTime, 0);
        previousRequestTime = now;
        return new Promise(function (resolve) {
            setTimeout(() => resolve(result), delay);
        });
    }

    request(subpathTemplate, argParameters = {}, postData = undefined) {
        const parameters = Object.assign({}, argParameters); // avoid modifying argument
        const subpath = subpathTemplate.replace(/{(\w+)}/g, function (match, name) {
            const value = parameters[name];
            if (value == null) {
                throw new Error(`Missing parameter "${name}"`);
            }
            delete parameters[name];
            return value;
        });
        const requestOptions = {
            url: this.options.baseUrl + subpath,
            qs: parameters,
            json: true,
        };
        if (postData !== undefined) {
            requestOptions.method = 'POST';
            requestOptions.body = postData;
        }
        return this.pause()
            .then(() => this.options.request(requestOptions));
    }

    getVotes(criteria = {}, rowLimit = 10, offSet = 0) { // ugh, "offset" has a capital "S" in the API
        return this.request('Voting/Search', {rowLimit, offSet}, criteria);
    }

}

module.exports = Client;
