const assert = require('assert');
const isIPv4Address = require('./isIPv4Address');

describe('isIPv4Address', () => {
    const testConditions = (param, isIt) => {
        it(`Is ${param} IPv4 Address? return yes true, no false - return: ${isIt}`, () => {
            assert.equal(isIPv4Address(param), isIt);
        });
    }
    
    const testCases = [
    [
        "192.167.0.1", true
    ],
    [
        "165.345.123.1", false
    ],
    [
        "1.23.56", false
    ],
    [
        ".34.56.123", false
    ],
    [
        "0.0.0.0", true
    ]
];
    testCases.forEach(el => testConditions(...el))
});