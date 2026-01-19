let total = 0;

function addPrice(price) {
    total += price;
    updateTotal();
}

function removePrice(price) {
    if (total >= price) {
        total -= price;
        updateTotal();
    } else {
        alert("Nuk mund të heqësh më shumë se totali ");
    }
}

function updateTotal() {
    document.getElementById("total").innerText =
        "Totali Gjithësej: " + total + "€";
}
