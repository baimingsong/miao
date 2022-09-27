var baimingsong = {
  chunk: function chunk(ary, size) {
    var arr1 = []
    var result = []
    var count = 0
    for (var i = 0; i < ary.length; i++) {
      arr1.push(ary[i])
      count++
      if (count == size) {
        result.push(arr1)
        arr1 = []
        count = 0
      }
    }
    if (arr1.length !== 0) {  // 此时 ary.length % size == 剩下的
      result.push(arr1)
    }
    return result
  },

  compact: function compact(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  },

  difference: function difference(ary, ...values) {
    var result = []
    values = values.flat()
    for (var i = 0; i < ary.length; i++) {
      if (!(values.includes(ary[i]))) {
        result.push(ary[i])
      }
    }
    return result
  },

  differenceBy: function differenceBy(ary, values, iteratee) {
    var result = []
    var ary1 = ary
    if (typeof (iteratee) == 'string') {
      return this.difference(ary, values)
    }
    for (var i = 0; i < ary1.length; i++) {
      ary1[i] = iteratee(ary1[i])

    }
    for (var i = 0; i < values.length; i++) {
      values[i] = iteratee(values[i])
    }
    var a = this.difference(ary1, values)
    for (var j = 0; j < ary.length; j++) {
      if (a.includes(iteratee(ary[j])))
        result.push(ary[j])
    }
    return result
  },

  differenceWith: function differenceWith(ary, values, comparator) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      for (var j = i; j < values.length; j++) {
        comparator(ary[i], values[j])
      }
    }
    return
  },

  drop: function drop(ary, n) {
    if (n == 0) {
      return ary
    }
    if (n >= ary.length) {
      return []
    }
    if (n == undefined) {
      return ary.slice(1, ary.length)
    }
    return ary.slice(n, ary.length)
  },


  dropRight: function dropRight(ary, n = 1) {
    if (n == 0) {
      return ary
    }
    if (n >= ary.length) {
      return []
    }
    return ary.slice(0, ary.length - n)
  },

  dropWhile: function dropWhile() {

  },

  fill: function fill(ary, value, start = 0, end = ary.length) {
    for (var i = start; i < end; i++) {
      ary[i] = value
    }
    return ary
  },


  findIndex: function findIndex(array, predicate, fromIndex = 0) {
    if (Array.isArray(predicate)) {
      for (var i = fromIndex; i < array.length; i++) {
        for (var key in array[i]) {
          if (key === predicate[0] && array[i][key] === predicate[1]) {
            return i
          }
        }
      }
    }
    if (typeof predicate === 'object') {
      for (var i = fromIndex; i < array.length; i++) {
        var flag = true
        for (var key in predicate) {
          if (key in array[i] && predicate[key] === array[i][key]) {
            continue
          }
          else {
            flag = false
          }
        }
        if (flag) {
          return i
        }
      }
    }
    if (typeof predicate === 'string') {
      for (var i = fromIndex; i < array.length; i++) {
        if (array[i][predicate] === true) {
          return i
        }
      }
    }
    if (typeof predicate === 'function') {
      for (var i = fromIndex; i < array.length; i++) {
        if (predicate(array[i])) {
          return i
        }
      }
    }
    return -1
  },


  findLastIndex: function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    if (typeof predicate === 'function') {
      for (var i = fromIndex; i >= 0; i--) {
        if (predicate(array[i])) {
          return i
        }
      }
    }
    if (typeof predicate === 'object') {
      for (var i = fromIndex; i >= 0; i--) {
        var flag = true
        for (var key in predicate) {
          if (key in array[i] && predicate[key] === array[i][key]) {
            continue
          } else {
            flag = false
          }
        }
        if (flag === true) {
          return i
        }
      }
    }

    if (typeof predicate === 'string') {
      for (var i = fromIndex; i >= 0; i--) {
        if (array[i][predicate] === true) {
          return i
        }
      }
    }
    if (Array.isArray(predicate)) {
      for (var i = fromIndex; i >= 0; i--) {
        for (var key in array[i]) {
          if (key === predicate[0] && array[i][key] === predicate[1]) {
            return i
          }
        }
      }
    }
    return -1
  },

  flatten: function flatten(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        for (var j = 0; j < (ary[i]).length; j++) {
          result.push(ary[i][j])
        }
      } else if (!(Array.isArray(ary[i]))) {
        result.push(ary[i])
      }
    }
    return result

  },

  flattenDeep: function flattenDeep(ary) {
    return this.flattenDepth(ary, Infinity)
  },

  flattenDepth: function flattenDepth(ary, depth = 1) {
    if (depth == 0) {
      return ary
    }
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i]) && depth > 0) {
        result = result.concat(flattenDepth(ary[i], depth - 1))
      } else {
        result.push(ary[i])
      }
    }
    return result
  },

  fromPairs: function fromPairs(pairs) {
    var obj = {}
    for (var i = 0; i < pairs.length; i++) {
      obj[pairs[i][0]] = pairs[i][1]
    }
    return obj
  },

  head: function head(ary) {
    if (ary.length == 0) {
      return undefined
    }
    return ary[0]
  },

  indexOf: function indexOf(ary, value, fromIndex = 0) {
    for (var i = fromIndex; i < ary.length; i++) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  },
  last: function last(ary) {
    return ary[ary.length - 1]
  },


  lastIndexOf: function lastIndexOf(ary, value, fromIndex = ary.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  },

  initial: function initial(ary) {
    ary.pop()
    return ary
  },

  join: function join(ary, separator) {
    var result = ''
    for (var i = 0; i < ary.length - 1; i++) {
      result = result + ary[i] + separator
    }
    result += ary[ary.length - 1]
    return result
  },


  pull: function pull(ary, ...values) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (!(values.includes(ary[i]))) {
        result.push(ary[i])
      }
    }
    return result
  },

  reverse: function reverse(ary) {
    var l = Math.floor(ary.length / 2)
    for (var i = 0; i < l; i++) {
      var temp = ary[i]
      ary[i] = ary[ary.length - 1]
      ary[ary.length - 1] = temp
    }
    return ary
  },

  every: function every(ary, predicate) {
    for (var i = 0; i < ary.length; i++) {
      if (this.predicateIs(predicate)(ary[i], i, ary) == false) {
        return false
      }
    }
    return true
  },
  some: function some(ary, predicate) {
    for (var i = 0; i < ary.length; i++) {
      if (this.predicateIs(predicate)(ary[i], i, ary) == true) {
        return true
      }
    }
    return false
  },

  countBy: function countBy(ary, iteratee) {
    if (typeof iteratee == 'function') {
      for (var i = 0; i < ary.length; i++) {
        var f = iteratee
      }

    }
    if (typeof iteratee === "string") {
      var f = (it) => it[iteratee]
    }
    var obj = {}
    for (var i = 0; i < ary.length; i++) {
      temp = f(ary[i])
      if (obj[temp] === undefined) {
        obj[temp] = 1
      } else {
        obj[temp]++
      }
    }
    return obj
  },
  forEach: function (collection, action) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        action(collection[i], i, collection);
      }
    }
    if (typeof collection == 'Object') {
      for (var key in collection) {
        action(collection[key], key, collection);
      }
    }
    return collection
  },
  map: function map(ary, transform) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      result.push(transform(ary[i]))
    }
    return result
  },
  filter: function filter(ary, predicate) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (typeof predicate === 'function') {
        if (predicate(ary[i])) {
          result.push(ary[i])
        }
      }
      if (typeof predicate === 'object') {
        var flag = true
        for (var key in predicate) {
          if (key in ary[i] && ary[i][key] === predicate[key]) {
            continue
          } else {
            flag = false
          }
        }
        if (flag) {
          result.push(ary[i])
        }
      }
      if (typeof predicate === 'string') {
        if (ary[i][predicate]) {
          result.push(ary[i])
        }
      }
      if (Array.isArray(predicate)) {
        for (var key in ary[i]) {
          if (key == predicate[0] && ary[i][key] == predicate[1]) {
            result.push(ary[i])
          }
        }
      }

    }
    return result
  },
  find: function find(ary, predicate, fromIndex = 0) {
    var l = ary.length
    for (var i = fromIndex; i < l; i++) {
      if (typeof predicate === 'function') {
        if (predicate(ary[i])) {
          return ary[i]
        }
      }
      if (typeof predicate === 'object') {
        var flag = true
        for (var key in predicate) {
          if (ary[i][key] === predicate[key]) {
            continue
          } else {
            flag = false
          }
        }
        if (flag) {
          return ary[i]
        }
      }
      if (Array.isArray(predicate)) {
        for (var key in ary[i]) {
          if (key === predicate[0] && ary[i][key] === predicate[1]) {
            return ary[i]
          }
        }
      }
      if (typeof predicate === 'string') {
        if (ary[i][predicate]) {
          return ary[i]
        }
      }
    }
    return undefined
  },

  reduce: function reduce(ary, combine, start) {
    var result = start
    for (var i = 0; i < ary.length; i++) {
      result = combine(result, ary[i])
    }
    return result
  },
  nth: function nth(ary, n) {
    if (n >= 0) {
      return ary[n]
    } else {
      return ary[ary.length + n]
    }
  },

  sortedIndex: function sortedIndex(ary, value) {
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] <= value && ary[i + 1] >= value) {
        return i + 1
      }
    }
  },
  sortedIndexBy: function sortedIndexBy(ary, value, iteratee) {
    for (var i = 0; i < ary.length; i++) {
      if (typeof iteratee === 'function') {
        if (iteratee(value) <= iteratee(ary[i])) {
          return i
        }
      }
      if (typeof iteratee === 'string') {
        if (value[iteratee] <= ary[i][iteratee]) {
          return i
        }
      }
    }
  },
  sortedLastIndexBy: function sortedLastIndexBy(ary, value, iteratee) {
    for (var i = ary.length - 1; i >= 0; i--) {
      if (typeof iteratee === 'function') {
        if (iteratee(value) >= iteratee(ary[i])) {
          return i
        }
      }
      if (typeof iteratee === 'string') {
        if (value[iteratee] >= ary[i][iteratee]) {
          return i
        }
      }
    }
  },
  size: function size(collection) {
    if (Array.isArray(collection)) {
      return collection.length
    }
    if (typeof collection == 'string') {
      collection = collection.split('')
      return collection.length
    }
    if (typeof collection == 'object') {
      var count = 0
      for (var key in collection) {
        if (collection[key] == undefined) {
          break
        }
        count++
      }
      return count
      // Object.keys(collection)
    }
  },

  union: function union(...arrays) {
    var result = []
    var obj = {}
    for (var i = 0; i < arrays.length; i++) {
      for (var j = 0; j < arrays[i].length; j++) {
        var temp = arrays[i][j]
        if (!(obj[temp] == undefined)) {
          obj[temp] = 1
          result.push(temp)
        }
      }
    }
    return result
  },
  sample: function sample(ary) {
    var temp = Math.floor(Math.random() * (ary.length - 1))
    return arr[temp]
  },
  isUndefined: function isUndefined(value) {
    return value === undefined
  },
  isNull: function isNull(value) {
    return value === null
  },
  isNil: function isNil(value) {
    return value == null || value == undefined
  },
  isNaN: function isNaN(value) {
    return this.isNumber(value) && value != +value
  },
  isNumber: function isNumber(value) {
    return typeof (value) === 'number'
  },
  isObject: function isObject(value) {
    return value != null && (typeof value == 'object' || typeof value == 'function')
  },
  isString: function isString(value) {
    return typeof value === 'string'
  },
  isMatch: function isMatch(object, source) {
    if (object === source) {
      return true
    }

  },
  range: function range(start = 0, end, step = 1) {
    var result = []
    if (arguments.length == 1) {
      end = start
      start = 0
      if (end < 0) {
        step = -1
      }
    }
    if (step > 0) {
      for (i = start; i < end; i += step) {
        result.push(i)
      }
    } else if (step == 0) {
      for (i = start; i < end; i++) {
        result.push(start)
      }
    }
    else {
      for (i = start; i > end; i += step) {
        result.push(i)
      }
    }
    return result
  },
  max: function max(ary) {
    if (ary.length == 0) {
      return undefined
    }
    var max = 0
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] > max) {
        max = ary[i]
      }
    }
    return max
  },
  maxBy: function maxBy(ary, iteratee) {

    var max = 0
    var maxIndex = 0
    for (var i = 0; i < ary.length; i++) {
      if (typeof iteratee == 'string') {
        var num = ary[i][iteratee]
      }
      if (typeof iteratee == 'function') {
        var num = iteratee(ary[i])
      }
      if (num > max) {
        max = num
        maxIndex = i
      }
    }
    return ary[maxIndex]
  },
  min: function min(ary) {
    if (ary.length == 0) {
      return undefined
    }
    var min = ary[0]
    for (var i = 1; i < ary.length; i++) {
      if (ary[i] < min) {
        min = ary[i]
      }
    }
    return min
  },
  minBy: function minBy(ary, iteratee) {
    var min = Infinity
    var minIndex = 0
    for (var i = 0; i < ary.length; i++) {
      if (typeof iteratee == 'string') {
        var num = ary[i][iteratee]
      }
      if (typeof iteratee == 'function') {
        var num = iteratee(ary[i])
      }
      if (num < min) {
        min = num
        minIndex = i
      }
    }
    return ary[minIndex]
  },


  round: function round() {

  },


  ceil: function ceil() {

  },
  floor: function floor() {

  },
  sortedIndexOf: function sortedIndexOf(ary, value) {
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] == value) {
        return i;
      }
    }
    return -1;

  },
  sortedLastIndexOf: function sortedLastIndexOf(ary, value) {
    for (var i = ary.length - 1; i >= 0; i--) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  },
  sortedLastIndex: function sortedLastIndex(ary, value) {
    for (var i = ary.length - 1; i >= 0; i--) {
      if (ary[i] == value) {
        return i + 1
      }
    }
    return -1
  },
  sortedUniq: function sortedUniq(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (result.indexOf(ary[i]) == -1) {
        result.push(ary[i])
      }
    }
    return result
  },
  sortedUniqBy: function sortedUniqBy(ary, iteratee) {
    var result = []
    var temp = []
    for (var i = 0; i < ary.length; i++) {
      var a = ary[i]
      if (temp.indexOf(iteratee(a)) == -1) {
        temp.push(iteratee(a))
        result.push(a)
      }
    }
    return result
  },
  tail: function tail(ary) {
    return ary.slice(1)

  },
  pullAll: function pullAll(ary, ...values) {
    var result = []
    values = values.flat(1)
    for (var i = 0; i < ary.length; i++) {
      if (!(values.includes(ary[i]))) {
        result.push(ary[i])
      }
    }
    return result
  },
  intersection: function intersection(...arrays) {
    var result = []
    var obj = {}
    for (var i = 0; i < arrays.length; i++) {
      for (var j = 0; j < arrays[i].length; j++) {
        var temp = arrays[i][j]
        if (!(temp in obj)) {
          obj[temp] = 1
        } else {
          obj[temp]++
        }
      }
    }
    for (var key in obj) {
      if (obj[key] == arrays.length) {
        result.push(+key)
      }
    }
    return result
  },
  intersectionBy: function intersectionBy(...ary) {
    var iteratee = ary[ary.length - 1]
    var result = []
    var temp = []
    for (var i = 0; i < ary.length - 1; i++) {
      var temp1 = []
      for (var j = 0; j < ary[i].length; j++) {
        if (typeof iteratee == 'function') {
          var num = iteratee(ary[i][j])
          temp1.push(num)
        }
        if (typeof iteratee == 'string') {
          var num = ary[i][j][iteratee]
          temp1.push(num)
        }
      }
      temp.push(temp1)
    }
    for (var i = 0; i < temp[0].length; i++) {
      for (var j = 1; j < temp.length; j++) {
        if (!temp[j].includes(temp[0][i])) {
          break
        }
        if (j = temp.length - 1) {
          result.push(ary[0][i])
        }
      }
    }
    return result
  },

  take: function take(ary, n = 1) {
    var result = []
    if (n == 0) {
      return result
    }
    if (n > ary.length) {
      n = ary.length
    }
    for (var i = 0; i < n; i++) {
      result.push(ary[i])
    }
    return result
  },
  takeRight: function takeRight(ary, n = 1) {
    var result = []
    if (n == 0) {
      return result
    }
    var start = ary.length - n
    if (start < 0) {
      start = 0
    }
    for (var i = start; i < ary.length; i++) {
      result.push(ary[i])
    }
    return result

  },
  union: function union(...array) {
    var result = []
    var ary = array.flat(1)
    for (var i = 0; i < ary.length; i++) {
      if (result.indexOf(ary[i]) == -1) {
        result.push(ary[i])
      }
    }
    return result
  },
  unionBy: function unionBy(...ary) {
    var result = []
    var temp = []
    var iteratee = ary[ary.length - 1] //
    for (var i = 0; i < ary.length - 1; i++) { //
      for (var j = 0; j < ary[i].length; j++) {
        if (typeof iteratee == 'function') {
          var num = iteratee(ary[i][j])
        }
        if (typeof iteratee == 'string') {
          var num = ary[i][j][iteratee]
        }
        if (temp.indexOf(num) == -1) {
          temp.push(num)
          result.push(ary[i][j])
        }
      }
    }
    return result
  },

  uniq: function uniq(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (result.indexOf(ary[i]) == -1) {
        result.push(ary[i])
      }
    }
    return result
  },
  uniqBy: function uniqBy(ary, iteratee) {
    var result = []
    var temp = []
    for (var i = 0; i < ary.length; i++) {
      if (typeof iteratee == 'function') {
        var num = iteratee(ary[i])
      }
      if (typeof iteratee == 'string') {
        var num = ary[i][iteratee]
      }
      if (temp.indexOf(num) == -1) {
        temp.push(num)
        result.push(ary[i])
      }
    }
    return result
  },
  unzip: function unzip(...array) {
    var result = []
    var temp = []
    for (var i = 0; i < array[0].length; i++) {
      for (var j = 0; j < array.length; j++) {
        temp.push(array[j][i])
      }
      result.push(temp)
      temp = []
    }
    return result
  },
  without: function without(ary, ...values) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (values.indexOf(ary[i]) == -1) {
        result.push(ary[i])
      }
    }
    return result
  },

  xor: function xor(...array) {
    var result = []
    var obj = {}
    var ary = array.flat(1)
    for (var i = 0; i < ary.length; i++) {
      if (!(ary[i] in obj)) {
        obj[ary[i]] = 1
      } else {
        obj[ary[i]]++
      }
    }
    for (var key in obj) {
      if (obj[key] == 1) {
        result.push(+key)
      }
    }
    return result
  },

  zip: function zip(...array) {
    var result = []
    var temp = []
    for (var i = 0; i < array[0].length; i++) {
      for (var j = 0; j < array.length; j++) {
        temp.push(array[j][i])
      }
      result.push(temp)
      temp = []
    }
    return result
  },
  predicateIs: function predicateIs(predicate) {
    if (typeof (predicate) === 'function') {
      return predicate
    }
    if (typeof (predicate) === 'object') { // 对象和数组时
      if (Array.isArray(predicate)) {
        return function (collection) {
          var [key, val] = predicate
          return collection[key] === val
        }
      } else {
        return function (collection) {
          for (var key in predicate) {
            if (collection[key] !== predicate[key]) {
              return false
            }
          }
          return true
        }
      }
    }
    if (typeof (predicate) === 'string') {
      return function (collection) {
        var key = predicate
        return collection[key]
      }
    }
  },

  defer: function defer(func, ...args) {

  },
  sum: function sum(ary) {
    var sum = 0
    for (var i = 0; i < ary.length; i++) {
      sum += ary[i]
    }
    return sum
  },
  sumBy: function sumBy(array, iteratee) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
      if (typeof iteratee === 'function') {
        sum += iteratee(array[i])
      }
      if (typeof iteratee === 'string') {
        sum += array[i][iteratee]
      }
    }
    return sum
  },
  toArray: function toArray(value) {
    var result = []
    if (typeof value === 'object') {
      for (var key in value) {
        result.push(value[key])
      }
      return result
    }
    if (typeof value === 'string') {
      return value.split('')
    }
    if (typeof value === 'number' || value == null) {
      return []
    }
  },
  concat: function concat(ary, ...values) {
    var value = values.flat(1)
    for (var i = 0; i < value.length; i++) {
      ary.push(value[i])
    }
    return ary
  },
  groupBy: function groupBy(ary, iteratee) {
    var obj = {}
    for (var i = 0; i < ary.length; i++) {
      if (typeof iteratee === 'function') {
        var key = iteratee(ary[i])
        if (obj[key] === undefined) {
          obj[key] = [[ary[i]]]
        } else {
          obj[key].push([[ary[i]]])
        }
      }
      if (typeof iteratee === 'string') {
        var key = ary[i][iteratee]
        if (obj[key] === undefined) {
          obj[key] = [[ary[i]]]
        } else {
          obj[key].push([[ary[i]]])
        }
      }
    }
    return obj
  },

  // sortBy: function sortBy(ary, iteratee) {

  //   var result = []
  //   var result1Age = []
  //   if (Array.isArray(iteratee)) {
  //     var result1 = []
  //     for (var i = 0; i < ary.length; i++) {
  //       var temp = []
  //       var a = iteratee[0]
  //       var b = iteratee[1]
  //       temp.push(ary[i][a])
  //       temp.push(ary[i][b])
  //       result1.push(temp)
  //       result1Age.push([result1[i][1]])
  //     }

  //     result = result1
  //   }


  //   // if (typeof iteratee === 'function') {
  //   //   var c = iteratee(ary[i])

  //   // }
  //   return result

  // },


  keyBy: function keyBy() {

  }













}
