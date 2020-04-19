function maxSum(arr) {
    if (arr.length < 1) return 0;
    if (arr.length < 2) return arr[0];
    // make array of all the possible contiguous subarrays
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const temp = [];
        for (let j = i; j < arr.length; j++) {
            temp.push(arr[j]);
            result.push([...temp]);
        }
    }
    // convert that to array of totals of each subarray
    let totals = [];
    result.map((array) => {
        totals.push(array.reduce(function(a, b){
            return a + b;
        }, 0));

    })
    // find largest of those totals
    let max = totals.reduce(function(a, b) {
        return Math.max(a, b);
    });

    console.log('max', max);
    return max;
}

maxSum([4, 6, -3, 5, -2, 1])