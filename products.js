function products(arr) {
    let prodArr = [];
    let tempContainer = [];
    if ( arr.length <= 1 ) {
        prodArr = arr;
    } else {
        for ( let i = 0; i < arr.length; i++ ) {
            let result = 1;
            tempContainer = arr.splice(i, 1);
            arr.map((product) => {
                result *= product;
            });
            prodArr.push(result);
            arr.unshift(tempContainer[0]);
        }
    }
    console.log('products', prodArr);
    return prodArr;
}

products([1, 3, 9, 4]);