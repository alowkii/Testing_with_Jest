const reverseString =require('./reverseString');

test("reverseString function exists", () => {
    const str = "hello";
    expect(reverseString(str)).toBe("olleh");
    });