const products = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        { id: 3, name: 'Product 3', price: 24.99 },
        { id: 4, name: 'Product 4', price: 29.99 },
        { id: 5, name: 'Product 5', price: 15.99 },
        { id: 6, name: 'Product 6', price: 27.99 },
        
        // Add more products as needed
    ];
    // Function to display products on the page
function displayProducts() {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productItem);
    });
}

// Function to add products to cart
let cart = [];

function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        cart.push(productToAdd);
        displayCart();
    }
}

// Function to display cart items
function displayCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Function to handle checkout form submission
const checkoutForm = document.getElementById('checkout-form');

checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Simulate order submission (replace with actual API call to backend)
    console.log('Order Details:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);

    alert('Order placed successfully!');
    cart = []; // Clear cart after successful order
    displayCart();
});

// Initialize the page
displayProducts();
displayCart();