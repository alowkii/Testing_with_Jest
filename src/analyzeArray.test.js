const analyzeArray = require('./analyzeArray');

test("Analyze array", () => {
    const result = {
        average: 4,
        min: 2,
        max: 6,
        length: 5
    };
    expect(analyzeArray([2,3,4,5,6])).toEqual(result);
});