function filter(arrOfNum) {
    for ( let i = 0; i < arrOfNum.length; i++ ) {
        if ( arrOfNum[i] < 5 ) {
            arrOfNum.splice(i, 1);
            i--;
        }
    }
    console.log(arrOfNum)
}

filter([3,4,0,1,8,9,10,2,5,6,7]);