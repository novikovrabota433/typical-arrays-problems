exports.min = function min (array) {
    if (array.length === 0 || array.isArray === false) {
        return 0;
    }
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}

exports.max = function max (array) {
    if (array.length === 0 || array.isArray === false) {
      return 0;
    }
    var max = array[0]
    for (var i = 0; i < array.length; i++) {
      if (max < array[i]) max = array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  if (array.length === 0 || array.isArray === false) {
    return 0;
  }
  var sum = 0;
    for (var i = 0, j = array.length; i < j; i++){
      sum += array[i];
    }
    return sum / array.length;
}

