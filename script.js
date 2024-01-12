function addToCart(productId) {
    // In a real-world scenario, you would update a database and handle the cart logic on the server side.
    const productName = `Product ${productId}`;
    const cart = document.getElementById('cart');
    const li = document.createElement('li');
    li.textContent = productName;
    cart.appendChild(li);
}
// Add this function to script.js
function checkout() {
    // In a real-world scenario, you would handle the checkout process, possibly integrating with a payment gateway.
    alert('Checkout button clicked. Implement the checkout logic!');
}
// Add these lines at the beginning of the script.js file
let selectedPaymentOption = null;

document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.getElementsByName('paymentOption');

    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            selectedPaymentOption = this.value;
        });
    });
});

// Add this function to script.js
function checkout() {
    if (!selectedPaymentOption) {
        alert('Please select a payment option.');
        return;
    }

    // In a real-world scenario, you would handle the checkout process based on the selected payment option.
    switch (selectedPaymentOption) {
        case 'upi':
            alert('Processing UPI payment. Implement the UPI logic!');
            break;
        case 'card':
            alert('Processing card payment. Implement the card payment logic!');
            break;
        default:
            alert('Invalid payment option.');
    }
}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/checkout', (req, res) => {
    const paymentOption = req.body.paymentOption;

    // Simulate backend processing
    switch (paymentOption) {
        case 'upi':
            // Implement UPI payment logic here
            res.json({ message: 'Processing UPI payment. Implement the UPI logic!' });
            break;
        case 'card':
            // Implement card payment logic here
            res.json({ message: 'Processing card payment. Implement the card payment logic!' });
            break;
        default:
            res.status(400).json({ error: 'Invalid payment option.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

function checkout() {
    if (!selectedPaymentOption) {
        alert('Please select a payment option.');
        return;
    }

    // Send a request to the backend
    fetch('http://localhost:3000/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentOption: selectedPaymentOption }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        alert('An error occurred during checkout.');
        console.error(error);
    });
}

function checkout() {
    if (!selectedPaymentOption) {
        alert('Please select a payment option.');
        return;
    }

    // Send a request to the backend
    fetch('http://localhost:3000/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentOption: selectedPaymentOption }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        alert('An error occurred during checkout.');
        console.error(error);
    });
}
