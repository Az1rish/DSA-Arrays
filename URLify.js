function URLify(string) {
    let arr = string.split('');
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] === ' ' ) {
            arr[i] = '%20'
        }
    }
    let newString = arr.join('');
    console.log(newString);
    return newString
}

function URLify2(string) {
    let newString = string.replace(' ', '%20')
    console.log(newString);
    return newString;
}

URLify("tauhida parveen");
URLify2("tauhida parveen");