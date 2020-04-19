function merge(arr1, arr2) {
    while ( arr2.length > 0 ) {
        let item = arr2.shift(arr2[0]);
        arr1.push(item);
    }
    arr1.sort(function(a, b) {
        return a - b;
      });
    console.log(arr1);
    return arr1;
}

merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);