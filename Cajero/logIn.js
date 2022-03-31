const accounts = JSON.parse(localStorage.getItem('accounts'));

const user = document.getElementById('user');
const password = document.getElementById('password');
let userOnline;

function login(){
    var userFind = 0;
    console.log(accounts);
    for (let i = 0; i < accounts.length; i++) {
        if(user.value == accounts[i].name){
            userFind = 1;
            if (password.value == accounts[i].password) {
                location ='logIn.html';
                userOnline = accounts[i];
                localStorage.setItem('user', JSON.stringify(userOnline));
            }
            else{
            alert('error de password');
            }
        }
        else if (i == accounts.length - 1){
            if (userFind != 1){
            alert('El usuario no existe');   
            }
        }
    }
}

window.onload = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) location = 'mainMenu.html';
}

