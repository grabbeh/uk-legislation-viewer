const _ = require('lodash')

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'za',
  'zb',
  'zc',
  'zd',
  'ze',
  'zf',
  'zg',
  'zh',
  'zi',
  'zj',
  'zk',
  'zl',
  'zm',
  'zn',
  'zo',
  'zp',
  'zq',
  'zr',
  'zs',
  'zt',
  'zu',
  'zv',
  'zw',
  'zx',
  'zy',
  'zz'
]

const numbers = [...Array(Number(10)).keys()].slice(1)

const addLetters = (numbers, alphabet) => {
  return numbers.map(number => {
    return alphabet.map(letter => {
      return [number, `${number}${letter.toUpperCase()}`]
    })
  })
}

let result = _.flattenDeep(addLetters(numbers, alphabet))

console.log(result)
