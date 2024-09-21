
const currentAmount = document.getElementById('current-amount');
const depositAmount = document.getElementById('deposit-amount');
const depositBtn = document.getElementById('deposit-btn');
const withdrawalAmount = document.getElementById('withdrawal-amount');
const withdrawalBtn = document.getElementById('withdrawal-btn');

let amount = 1000;

function newAmount() {
    currentAmount.textContent = amount.toFixed(2);
}

depositBtn.addEventListener('click', () => {
    const depositValue = parseFloat(depositAmount.value);
    if (depositValue > 0) {
        amount += depositValue;
        newAmount();
        depositAmount.value = '';
    }
});


withdrawalBtn.addEventListener('click', () => {
    const withdrawalValue = parseFloat(withdrawalAmount.value);
    if (withdrawalValue > 0 && withdrawalValue <= amount) {
        amount -= withdrawalValue;
        newAmount();
        withdrawalAmount.value = '';
    } else {
        alert('Not sufficient funds !');
    }
});

newAmount();