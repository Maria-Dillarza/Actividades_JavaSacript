const amount = document.getElementById('amount');
const amountWithdraw = document.getElementById('amountWithdraw');
const totalInCount = document.getElementById('totalInCount')
const user = JSON.parse(localStorage.getItem('user'));
const accounts = JSON.parse(localStorage.getItem('accounts'));

function withdraw() {
    user.balance = Number(user.balance) - Number(amount.value);
    if(user.balance < 10) {
        alert('No puedes tener menos de $10 en tu cuenta');
        user.balance = Number(amount.value) + Number(user.balance);
    } else {
        amountWithdraw.textContent = '$ ' + amount.value;
        totalInCount.textContent = '$' + user.balance;
        localStorage.setItem('user', JSON.stringify(user));
    }
    const userIndex = accounts.findIndex((element) => element.name == user.name);
    accounts[userIndex].balance = user.balance;
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

function logOut() {
    localStorage.removeItem('user');
    location = 'logIn.html';
}

function redirect(route) {
    location = route;
}
