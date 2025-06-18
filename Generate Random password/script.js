const passwordBox = document.getElementById("Password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    let chars = upperCase + lowerCase;
    if (includeNumbers) chars += number;
    if (includeSymbols) chars += symbol;

    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    if (includeNumbers) password += number[Math.floor(Math.random() * number.length)];
    if (includeSymbols) password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < lenght) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordBox.value = password;
    checkStrength(password);
}


const copyIcon = document.querySelector(".display img");

copyIcon.addEventListener("click", () => {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});

function checkStrength(password) {
    const strengthText = document.getElementById("strengthText").querySelector("span");
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W]/.test(password)) strength++;

    if (strength <= 1) {
        strengthText.innerText = "Weak";
        strengthText.style.color = "red";
    } else if (strength == 2 || strength == 3) {
        strengthText.innerText = "Medium";
        strengthText.style.color = "orange";
    } else {
        strengthText.innerText = "Strong";
        strengthText.style.color = "green";
    }
}

