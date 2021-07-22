import reverseStr from "../code/reverseString";

test('works', () => {
    expect(reverseStr("abc")).toBe("cba");
})
test('works with spaces', () => {
    expect(reverseStr("a bc")).toBe("cb a");
})

