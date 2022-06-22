const assert = require('assert');
const {fetchAndFilter} = require("../src/fetch-and-filter");

describe('Test a complete case', function () {
    it('should return with data', async function () {
        const actualResult = await fetchAndFilter('1950-01-01', '2023-01-01');
        assert.equal(Boolean(JSON.parse("" + actualResult)), true)
    });
})