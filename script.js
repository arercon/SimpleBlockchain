let node0 = new MiningNode(0, 'Jannek');
let node1 = new MiningNode(1, 'Marius');
let blockchain = new Blockchain();
let CHART_DATA = {
    amounts: [0, 0, 0, 0, 0, 0],
    labels: ['', '', '', '', '', '']
};

function startNode0() {
    log('Toggle Node 0');
    n0.classList.toggle('pause-btn');
    node0.toggle();
}

function startNode1() {
    log('Toggle Node 1');
    n1.classList.toggle('pause-btn');
    node1.toggle();
}

function sendMoney() {
    newTransaction.notify({
        from: from.value,
        to: to.value,
        amount: +amount.value
        // amount: parseInt(amount.value)
    });
}

function validateTransaction() {
    const senderName = document.getElementById('from').value;
    const receiverName = document.getElementById('to').value;
    const sendButton = document.getElementById('sendButton');

    if (senderName && receiverName && senderName !== receiverName && amount.value > 0) {
        sendButton.disabled = false;
    } else {
        sendButton.disabled = true;
    }
}

// Initialize the button state on page load
document.addEventListener('DOMContentLoaded', (event) => {
    validateTransaction();
});

function log(text) {
    let hours = ('0' + new Date().getHours()).slice(-2);
    let minutes = ('0' + new Date().getMinutes()).slice(-2);
    logs.innerHTML += `<div class="mb-16">
    <code>
        <i>${hours}:${minutes}:</i> ${text}
    </code></div>`;
}

function updateGraphData(moneyTable) {
    debugger;
    moneyTable.forEach((entry, i) => {
        CHART_DATA.amounts[i] = entry.amount;
        CHART_DATA.labels[i] = entry.name;
    });
    myChart.update();
}

function renderCurrentTransactions(transactions) {
    transactionContainer.innerHTML = '<h2>Transaktionen</h2>';
    transactions.forEach(transaction => {
        transactionContainer.innerHTML +=
            `<div class="card mb-16">${transaction.from} 🠖 ${transaction.to}  $${transaction.amount}</div>`;
    });
}