function addToCart(productId) {

    const productName = `Product ${productId}`;
    const cart = document.getElementById('cart');
    const li = document.createElement('li');
    li.textContent = productName;
    cart.appendChild(li);
}

function checkout() {
    
    alert('Checkout button clicked. Implement the checkout logic!');
}

let selectedPaymentOption = null;

document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.getElementsByName('paymentOption');

    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            selectedPaymentOption = this.value;
        });
    });
});


function checkout() {
    if (!selectedPaymentOption) {
        alert('Please select a payment option.');
        return;
    }

    
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

  
    switch (paymentOption) {
        case 'upi':
          
            res.json({ message: 'Processing UPI payment. Implement the UPI logic!' });
            break;
        case 'card':
           
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
