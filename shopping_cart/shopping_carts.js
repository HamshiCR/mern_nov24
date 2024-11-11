var cartItems = [];

function findAmount() {
    let qty = parseInt(document.getElementById('qty').value);
    let price = parseInt(document.getElementById('price').value);
    if (!isNaN(qty) && qty > 0 && !isNaN(price) && price > 0) {
        let amt = qty * price;
        document.getElementById('amt').value = amt;
    } else {
        document.getElementById('amt').value = '';
    }
}

function addtocart() {
    let Pname = document.getElementById("Pname").value; 
    let qty = parseInt(document.getElementById("qty").value);
    let price = parseInt(document.getElementById("price").value); 
    let amt = parseFloat(document.getElementById("amt").value); 

    if (Pname && qty > 0 && price > 0 && !isNaN(amt) && amt > 0) {
        cartItems.push({ Pname, qty, price, amt }); 
        document.getElementById("Pname").value = '';
        document.getElementById("qty").value = '';
        document.getElementById("price").value = ''; 
        document.getElementById("amt").value = ''; 
        displayCart();
    } else { 
        alert("Please fill out all fields correctly before adding to the cart."); 
    }
}

function cartDetails() { 
    displayCart();
    document.getElementById("cartSection").style.display = 'block'; 
}

function displayCart() { 
    let tableBody = document.getElementById("cartTableBody");
    let cartMessage = document.getElementById("cartMessage"); 
    let totalAmount = document.getElementById("totalAmount");

    tableBody.innerHTML = '';
    let total = 0;

    if (cartItems.length === 0) { 
        cartMessage.innerHTML = "Your cart is empty.";
        totalAmount.innerHTML = '';
    } else { 
        cartMessage.innerHTML = "";
        cartItems.forEach(item => { 
            let row = tableBody.insertRow(); 
            row.insertCell(0).innerHTML = item.Pname; 
            row.insertCell(1).innerHTML = item.qty; 
            row.insertCell(2).innerHTML = item.price; 
            row.insertCell(3).innerHTML = item.amt;
            total += item.amt; // Accumulate total amount
        });
        totalAmount.innerHTML = `Total Amount: ₹${total.toFixed(2)}`;
    }
}
