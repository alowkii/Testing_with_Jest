const caesarCipher = require('./caesarCipher');

test("caesarCipher('abc', 1) should return 'bcd'", () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});