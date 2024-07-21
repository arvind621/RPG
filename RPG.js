const para = document.getElementById('para');
const input = document.getElementById('input');


function generate () { 
    let password = "";
    let range = input.value;

    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let specialchar = '!@#$%^&*()_+';

    mainCharactes = upperCase + lowerCase + numbers + specialchar ;
    console.log(mainCharactes);

    let array = mainCharactes.split("");
    console.log(array);

    for (let i = 0; i <range; i++) {
        let index = Math.floor(Math.random() * array.length);
        password += array[index];
    }
    // console.log (mainCharactes.charAt(4));
    console.log(password);
    para.innerHTML = `<h1> password: ${password}</h1>`;
    input.value = "";

  
};