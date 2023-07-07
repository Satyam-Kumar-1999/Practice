function showPass() {
    let showPassword = document.getElementById("showPass");
    if (showPassword.type === 'password') {
        showPassword.type = 'text';
    } else {
        showPassword.type = 'password';
    }
}

function checkPass() {
    let createPassword = document.getElementById("createPass").value;
    let confirmPassword = document.getElementById("confirmPass").value;
    if (createPassword === confirmPassword) {
        document.getElementById("msg").textContent = "Password Matched.";
        document.getElementById("msg").style.color = 'green';
    } else {
        document.getElementById("msg").textContent = "Password Not Matched.";
        document.getElementById("msg").style.color = 'red';
    }
}

function cel() {
    let celc = parseFloat(document.getElementById("cel").value);
    let formulae = parseFloat(celc * (9 / 5) + 32);
    document.getElementById("msg1").innerHTML = `${formulae} degree Fahrenheit.`;

}

function fah() {
    let fahr = parseFloat(document.getElementById("fah").value);
    let formulae = parseFloat(((fahr - 32) * 5) / 9);
    document.getElementById("msg2").innerHTML = `${formulae} degree Celcius.`;
}