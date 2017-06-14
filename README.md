# poly-count
Universal data counter

## Motivation
1. To correct JS behaviour when strings are treated as lists of characters rather than single pieces of data when it comes to length calculation.
2. To allow counting items in point-free style expressions.

## Features
- Works with any type of data

## Installation

```
npm install poly-count
```

## Testing
```
npm test
```

## Usage

```javascript
var count = require('poly-count');

console.log(count(['a', 'c'])); // => 2
console.log(count({ a: 100, b: 500 })); // => 2

console.log(count(100500)); // => 1
console.log(count('100500')); // => 1
```
