const output = document.querySelector('.password-input'),
      range = document.querySelector('.range input'),
      passlength = document.querySelector('.range .length'),
      button = document.querySelector('.btn button'),
      pasStrength = document.querySelector('.passStrength div'),
      copy = document.querySelector('.copy'),
      copied = document.querySelector('.copied');

let rangeValue = 15;

range.oninput = ()=>{
    rangeValue = range.value;
    passlength.innerHTML = rangeValue;
    PasswordStrength();
}

function PasswordStrength(){
    let width = (( rangeValue / 30) * 100).toFixed(0);
    pasStrength.style.width = width + "%";
    if(rangeValue < 8){
        pasStrength.style.backgroundColor = 'red';
    }else if(rangeValue < 20){
        pasStrength.style.backgroundColor = 'orange';
    }else{
        pasStrength.style.backgroundColor = 'green';
    }
}
PasswordStrength();
function GeneratePassword(){
    let  lowercase = document.getElementById('lowercase'),
    uppercase = document.getElementById('uppercase'),
    numbers  = document.getElementById('numbers'),
    symbol = document.getElementById('symbols');

    let LOWERCASE_CHAR = 'abcdefghijklmnopqrstuvwxyz';
    let UPPERCASE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let NUMBER_CHAR = '1234567890';
    let SYMBOLS_CHAR = `!@#$%^&*()_+;:"/.,<>`;
    let CHAR_CODES = LOWERCASE_CHAR;
    
    if(uppercase.checked) CHAR_CODES = CHAR_CODES.concat(UPPERCASE_CHAR);
    if(numbers.checked)  CHAR_CODES = CHAR_CODES.concat(NUMBER_CHAR);
    if(symbol.checked)  CHAR_CODES = CHAR_CODES.concat(SYMBOLS_CHAR);
    let password = '';
    for(i=0;i<rangeValue;i++){
        password += CHAR_CODES[Math.floor(Math.random() * CHAR_CODES.length)];
    }
    return output.value = password;
}
    button.addEventListener('click' , GeneratePassword);
    GeneratePassword();

copy.onclick = ()=>{
    navigator.clipboard.writeText(output.value);
    copied.classList.add('active');
    setTimeout(()=>{
        copied.classList.remove('active');
    }, 1000);
}