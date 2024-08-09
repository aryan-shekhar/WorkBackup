
    let total = 0;
    let errors = false;

    Object.keys(prices).forEach(vegetable => {
        const qtyElement = document.getElementById(`${vegetable}Qty`);
        const errorElement = document.getElementById(`${vegetable}Error`);
        const qty = parseFloat(qtyElement.value);

        if (!isNaN(qty) && qty >= minQty && qty <= maxQty && (qty * 2) % 1 === 0) {
            errorElement.textContent = '';
            total += qty * prices[vegetable];
        } else if (!isNaN(qty)) {
            errorElement.textContent = `Quantity should be between ${minQty} and ${maxQty} in multiples of ${stepQty} kg`;
            errors = true;
        } else {
            errorElement.textContent = '';
        }
    });

    if (!errors) {
        const totalElement = document.getElementById('totalAmount');
        totalElement.className = 'total';
        totalElement.textContent = `Total Amount: ${total} INR`;

        if (total > 500) {
            totalElement.classList.add('green');
        } else if (total > 250) {
            totalElement.classList.add('yellow');
        } else if (total >= 100) {
            totalElement.classList.add('blue');
        }
    }
}