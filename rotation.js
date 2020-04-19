function rotation(string, stringToCheck) {
    let rotations = [];
    
    while ( rotations.length < string.length ) {
        let eachRotation = string.substring(1, string.length) + string[0]
        rotations.push(eachRotation);
        string = eachRotation;
    }
    // console.log('rotations', rotations);
    for ( let i = 0; i < rotations.length; i++ ) {
        if ( stringToCheck === rotations[i] ) {
            return true;
        }
    }
    return false;
}

console.log(rotation("amazon", "azonma"));
console.log(rotation("amazon", "azonam"));