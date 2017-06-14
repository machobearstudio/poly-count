var count = require('./index')

test('Counts items in arrays', () => {
  expect(count([1, 2, 3, 4, 5])).toEqual(5)
  expect(count([])).toEqual(0)
})

test('Counts properties in objects', () => {
  expect(count({ a: 1, b: 2, c: 3 })).toEqual(3)
  expect(count({})).toEqual(0)
})

test('Returns zero for empty values', () => {
  expect(count(null)).toEqual(0)
  expect(count()).toEqual(0)
  expect(count(undefined)).toEqual(0)
})

it('Counts other things as singular objects', () => {
  expect(count(true)).toEqual(1)
  expect(count(false)).toEqual(1)
  expect(count(0)).toEqual(1)
  expect(count(100500)).toEqual(1)
  expect(count(1.5)).toEqual(1)
  expect(count('string here')).toEqual(1)

  const f = () => {}
  expect(count(f)).toEqual(1)
})
