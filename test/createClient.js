const expect = require('chai').expect;
const {Client, createClient} = require('..');

describe(
    'createClient',
    function () {
        describe(
            'class',
            function () {
                it(
                    'Basic',
                    function () {
                        const client = createClient();
                        expect(client).is.instanceof(Client);
                    }
                );
            }
        );
    }
);
