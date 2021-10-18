const assert = require('assert');
const areEquallyStrong = require('./areEquallyStrong').areEquallyStrong;

describe('areEquallyStrong', () => {
    const testCondition = (yourLeft, yourRight, friendsLeft, friendsRight, isEquallyStrong) => {
        it(`equally strong yours and friends ${yourLeft}, ${yourRight}, ${friendsLeft}, ${friendsRight} 
    and return between yours and friends equally strong is ${isEquallyStrong}}`, function () {
                assert.equal(areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight), isEquallyStrong);
        });
    }

    const testCases = [[10, 15, 15, 10, true], [5, 10, 5, 10, true], [10, 9, 8, 10, false]];
    testCases.forEach(element => testCondition(...element));
});