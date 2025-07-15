const passwordBox = document.getElementById("password") ;
const length = 12;

const button = document.getElementById("generate");

button.addEventListener("click" , () => {
    const upperCase = "ABCDEFGHIJKLMNPQRSTUVWXYZ" ;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789" ;
const symbols = "!@#$%^&*()_+-|}{[]~" ;

const allchars = upperCase + lowerCase + numbers + symbols ;

function genpassword() {
    let password = "";
    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+= numbers[Math.floor(Math.random()*numbers.length)];
    password+= symbols[Math.floor(Math.random()*symbols.length)];

    while(password.length < length){
        password += allchars[Math.floor(Math.random()*allchars.length)];
    }

    passwordBox.value = password ;


}
genpassword();
});

const copyIcon = document.getElementById("copy");

copyIcon.addEventListener("click", () => {
    passwordBox.select();
    document.execCommand("copy"); 
});







