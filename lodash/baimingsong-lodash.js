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

  difference: function difference(ary, values) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (!(values.includes(ary[i]))) {
        result.push(ary[i])
      }
      if (typeof (ary[i]) == Object) {
        var temp = ary[i]
        if (temp.val !== values[i].val) {
          if (values[i].val == undefined) {
            break
          }
          result.push(temp)
        }
      }
    }
    return result
  },

  differenceBy: function differenceBy(ary, values, iteratee) {
    var result = []
    var ary1 = ary
    if (typeof (iteratee) == 'string') {
      return difference(ary, values)
    }
    for (var i = 0; i < ary1.length; i++) {
      ary1[i] = iteratee(ary1[i])

    }
    for (var i = 0; i < values.length; i++) {
      values[i] = iteratee(values[i])
    }
    var a = difference(ary1, values)
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

  findIndex: function findIndex(ary, predicate = identity, fromIndex = ary.length - 1) {
    if (Array.isArray(predicate)) {
      for (var i = fromIndex; i >= 0; i--) {
        for (var key in ary[i]) {
          if (key === predicate[0] && ary[i][key] === predicate[1]) {
            return i
          }
        }
      }
    }
    if (typeof predicate === Object) {
      for (var i = fromIndex; i >= 0; i--) {
        var flag = true
        for (var key in predicate) {
          if (key in ary[i] && predicate[key] === ary[i][key]) {
            continue
          } else {
            flag = false
          }
          if (flag) {
            return i
          }
        }
      }
    }
    if (typeof predicate === 'string') {
      for (var i = fromIndex; i >= 0; i--) {
        if (ary[i][predicate] === true) {
          return i
        }
      }
    }
    if (typeof predicate === 'function') {
      for (var i = fromIndex; i >= 0; i--) {
        if (predicate(ary[i])) {
          return i
        }
      }
    }
    return -1
  },




}
