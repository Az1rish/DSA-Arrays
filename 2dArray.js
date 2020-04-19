function doubleArray(arr) {
    let arrays = [];
    let indexes = [];
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = 0; j < arr[i].length; j++ ) {
            if ( arr[i][j] === 0 ) {
                arrays.push(i);
                indexes.push(j);
            }
        }
    }
    arrays = [...new Set(arrays)];
    indexes = [...new Set(indexes)];
    // console.log('arrays', arrays, 'indexes', indexes);

    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = 0; j < arrays.length; j++ ) {
            if ( i === arrays[j] ) {
                arr[i].fill(0, 0)
            } else {
                for ( let k = 0; k < indexes.length; k++ ) {
                    arr[i].splice(indexes[k], 1, 0);
                }
            }
        }
    }

    console.log('newArr', arr);
}

doubleArray([[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]);