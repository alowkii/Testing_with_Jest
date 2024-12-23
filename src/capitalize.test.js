const capitalize = require('./capitalize');

test('capitalizes "Happy" to "HAPPY"', () => {
    const str = "Happy";
    expect(capitalize(str)).toBe("HAPPY");
  });