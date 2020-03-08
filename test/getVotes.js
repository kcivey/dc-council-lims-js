/* globals describe, it */

require('./nock');
const expect = require('chai').expect;
const {Client} = require('..');
const options = {};

if (process.env.NOCK_OFF !== 'true') {
    options.minInterval = 0; // for testing, when no real HTTP requests are being made
}

describe(
    'getVotes',
    function () {
        this.timeout(5000); // allow for pauses between requests in live testing
        describe(
            'return values',
            function () {
                it(
                    'no arguments',
                    function (done) {
                        const client = new Client(options);
                        client.getVotes()
                            .then(function (votes) {
                                expect(votes).to.be.an('array').that.has.length(10);
                                const v = votes[0];
                                expect(v).to.be.an('object').that.has.all.keys(
                                    'LegislationNumber',
                                    'DateOfVote',
                                    'VoteResult',
                                    'ReadingDescription',
                                    'VideoLink',
                                    'MemberVotes',
                                    'DocumentType',
                                    'DocumentUrl',
                                    'VoteType',
                                    'Title',
                                    'Id',
                                    'CouncilPeriod',
                                    'Modified'
                                );
                                done();
                            })
                            .catch(done);
                    }
                );

                /*
                it(
                    'No results (null dataset)',
                    function (done) {
                        const client = new Client(options);
                        client.findLocation('****')
                            .then(function (addresses) {
                                expect(addresses).has.length(0);
                                done();
                            })
                            .catch(done);
                    }
                );
                it(
                    'No results (empty dataset)',
                    function (done) {
                        const client = new Client(options);
                        client.findLocation('1600')
                            .then(function (addresses) {
                                expect(addresses).has.length(0);
                                done();
                            })
                            .catch(done);
                    }
                );
                */
            }
        );
    }
);
