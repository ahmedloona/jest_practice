import reverseStr from './reverse_string';

test('reverseStr function exists', () => {
    expect(reverseStr).toBeDefined();
});

test('reverses hello to return olleh', () => {
    expect(reverseStr('hello')).toBe('olleh');
});

test('reverses Hello to return olleh', () => {
    expect(reverseStr('Hello')).toBe('olleh');
});
