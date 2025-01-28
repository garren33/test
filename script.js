let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    document.getElementById('cart-count').innerText = cart.length;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').innerText = `Total: $${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout!');
        // Here you would typically handle the checkout process
    }
}