function replace(string, removeThis) {
    removeThis = `[${removeThis}]`;
    let regex = new RegExp(removeThis,"g");
    let newString = string.replace(regex, '');
    console.log(newString);
    return newString;
}

replace('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')