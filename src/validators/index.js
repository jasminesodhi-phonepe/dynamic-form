export function validateInput(text, val) {
    
    console.log('---> Reached: ', text, val);
    if(val.isBlank && text===null)
        alert('Field cannot be empty');

    if(val.isNum && isNaN(text))
        alert('Must be a number');

    if(val.length && text.length!==val.length)
        alert('Length must be 10!');

    if(val.maxLength && text.length>val.maxLength)
        alert('Length must be less than ' + val.maxLength);

    if(val.greaterThan && text<val.greaterThan)
        alert('Date must be greater than ' + val.greaterThan);

    if(val.lessThan && text>val.lessThan)
        alert('Date must be less than ' + val.lessThan);
}
