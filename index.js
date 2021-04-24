const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
const deleteEl = document.getElementById("delete");

const randomFunction {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

deleteEl.addEventListener("click", () => {
    resultEl.innerHTML = "";
});

clipboard.addEventListener("click", () => {
    const textarea = document.createElement("textarea");

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password was copied to clipboard")
});

generateEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbols = symbolsEl.checked;

    console.log("***something upp***");
    console.log(length, "length is ");
    console.log("something down")

    resultEl.innerText = generate(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbols,
        length
    );
});

function generate(lower, upper, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    console.log(typesCount, "typesCount");

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(items)[0]
    );
    console.log(typesArr, "typesArr");

    if(typesCount === 0) {
        return "";
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]();
            console.log(randomFunc[funcName], "randomFunc[funcName]");
            console.log(generatedPassword, "generatedPassword");
        });
    }

    const finalPassword

    
}


