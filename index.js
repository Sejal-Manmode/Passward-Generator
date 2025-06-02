const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*<>?/()[]{}_=+-₹\|;:,.'";

const passwordBox = document.getElementById("pass-box");
const charRange = document.getElementById("total-char");
const upperInp = document.getElementById("upper-case");
const lowerInp = document.getElementById("lower-case");
const numbInp = document.getElementById("numbers");
const symbolsInp = document.getElementById("symbols");

function getRandomData(dataset){
    return dataset[Math.floor(Math.random() * dataset.length)]
}

function generatePassword(password = ""){
    if(upperInp.checked){
        password = password + getRandomData(upperCase);
    }
    if(lowerInp.checked){
        password = password + getRandomData(lowerCase);
    }
    if(numbInp.checked){
        password = password + getRandomData(numbers);
    }
    if(symbolsInp.checked){
        password = password + getRandomData(symbols);
    }
    if(password.length < charRange.value){
        return generatePassword(password);
    }
    console.log(truncateString(password, charRange.value));

    passwordBox.innerText = truncateString(password, charRange.value);
}

document.getElementById("btn").addEventListener("click", function(){
    generatePassword();
})

function truncateString(str, num){
    if(str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}

generatePassword();