const palindromes = function (str) {
    str = str.replace(/\W/g, '').toLowerCase();
    let reversed = ''
    for(let i=str.length-1; i>=0;i--)
        reversed += str[i];
    return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
