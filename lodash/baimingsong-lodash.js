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

  findIndex: function findIndex(array, predicate = identity, fromIndex = 0) {
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




  findLastIndex: function findLastIndex() {

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
      if (predicate(ary[i], i, ary) == false) {
        return false
      }
    }
    return true
  },
  some: function some(ary, predicate) {
    for (var i = 0; i < ary.length; i++) {
      if (predicate(ary[i], i, ary) == true) {
        return true
      }

    }
    return false
  },

  countBy: function countBy(ary, iteratee) {
    if (typeof iteratee == 'function') {
      for (var i = 0; i < ary.length; i++) {
        ary[i] = iteratee([ary[i]])

      }
      var obj = {}
      for (var i = 0; i < ary.length; i++) {
        if (obj[ary[i]] === undefined) {
          obj[ary[i]] = 1
        } else {
          obj[ary[i]]++
        }
      }
      return obj
    }
  },

  groupBy: function groupBy() {

  },
  keyBy: function keyBy() {

  },
  forEach: function forEach(ary, action) {
    for (var i = 0; i < ary.length; i++) {
      action(ary[i])
    }
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
      if (predicate(ary[i])) {
        result.push(ary[i])
      }
    }
    return result
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






}
