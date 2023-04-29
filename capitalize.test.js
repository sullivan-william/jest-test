const capitalize = require('./capitalize')

test('hello to return Hello', () => {
    expect(capitalize('hello')).toBe('Hello')
})

test('Already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello')
})