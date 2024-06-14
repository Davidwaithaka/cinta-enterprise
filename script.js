document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartTotal = document.getElementById('cart-total');
    const cartItemsList = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - KES ${item.price}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = total;
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            cartItems.push({ name, price });
            updateCart();
        });
    });

    checkoutButton.addEventListener('click', () => {
        alert('Proceeding to checkout...');
        // Here you can add code to handle the checkout process
    });
});
