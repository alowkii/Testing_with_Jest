function caesarCipher(text, key){
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let result = '';
    for(let i=0; i<text.length; i++){
        let char = text[i];
        if(lowerAlphabet.includes(char)){
            let index = lowerAlphabet.indexOf(char);
            let newIndex = (index + key) % 26;
            result += lowerAlphabet[newIndex];
        } else if(upperAlphabet.includes(char)){
            let index = upperAlphabet.indexOf(char);
            let newIndex = (index + key) % 26;
            result += upperAlphabet[newIndex];
        } else if(numbers.includes(char)){
            let index = numbers.indexOf(char);
            let newIndex = (index + key) % 10;
            result += numbers[newIndex];
        } else {
            result += char;
        }
    }

    return result;
}

module.exports = caesarCipher;