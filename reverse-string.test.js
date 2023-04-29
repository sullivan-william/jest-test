const reverseString = require('./reverse-string')

test('hello to return olleh', () => {
    expect(reverseString('hello')).toBe('olleh')
})