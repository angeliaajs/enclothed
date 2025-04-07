// Cart.js - Shopping Cart and Wishlist Management

// Cart and wishlist data structure
let cart = [];
let wishlist = [];

// Function to initialize cart and wishlist from localStorage
function initializeCartAndWishlist() {
    // Try to load from localStorage
    const savedCart = localStorage.getItem('enclothed_cart');
    const savedWishlist = localStorage.getItem('enclothed_wishlist');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
    
    // Update UI elements
    updateCartCount();
    updateWishlistCount();
    renderCart();
    renderWishlist();
    updateOrderSummary();
    renderCheckoutItems();
}

// Format price to IDR currency format
function formatPrice(price) {
    return 'IDR ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Add item to cart
function addToCart(product, quantity, size) {
    // Check if product already exists in cart with the same size
    const existingItemIndex = cart.findIndex(item => 
        item.id === product.id && item.size === size
    );
    
    if (existingItemIndex !== -1) {
        // Update quantity of existing item
        cart[existingItemIndex].quantity += parseInt(quantity);
    } else {
        // Add new item to cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: parseInt(quantity),
            size: size
        });
    }
    
    // Save to localStorage
    saveCartToLocalStorage();
    
    // Update UI
    updateCartCount();
    renderCart();
    updateOrderSummary();
    renderCheckoutItems();
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    
    // Save to localStorage
    saveCartToLocalStorage();
    
    // Update UI
    updateCartCount();
    renderCart();
    updateOrderSummary();
    renderCheckoutItems();
}

// Update cart item quantity
function updateCartItemQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    
    // Save to localStorage
    saveCartToLocalStorage();
    
    // Update UI
    renderCart();
    updateOrderSummary();
    renderCheckoutItems();
}

// Toggle wishlist item
function toggleWishlistItem(product) {
    const existingItemIndex = wishlist.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
        // Remove from wishlist
        wishlist.splice(existingItemIndex, 1);
    } else {
        // Add to wishlist
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
    }
    
    // Save to localStorage
    saveWishlistToLocalStorage();
    
    // Update UI
    updateWishlistCount();
    renderWishlist();
}

// Check if product is in wishlist
function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

// Move item from wishlist to cart
function moveToCart(wishlistIndex, size = 'M', quantity = 1) {
    const wishlistItem = wishlist[wishlistIndex];
    
    // Add to cart
    addToCart({
        id: wishlistItem.id,
        name: wishlistItem.name,
        price: wishlistItem.price,
        image: wishlistItem.image
    }, quantity, size);
    
    // Remove from wishlist
    wishlist.splice(wishlistIndex, 1);
    saveWishlistToLocalStorage();
    
    // Update UI
    updateWishlistCount();
    renderWishlist();
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('enclothed_cart', JSON.stringify(cart));
}

// Save wishlist to localStorage
function saveWishlistToLocalStorage() {
    localStorage.setItem('enclothed_wishlist', JSON.stringify(wishlist));
}

// Update cart count badge
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Update wishlist count badge
function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// Calculate cart total
function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update order summary
function updateOrderSummary() {
    const subtotal = calculateCartTotal();
    const shipping = cart.length > 0 ? 15000 : 0;
    const total = subtotal + shipping;
    
    // Update cart summary
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) subtotalElement.textContent = formatPrice(subtotal);
    if (shippingElement) shippingElement.textContent = formatPrice(shipping);
    if (totalElement) totalElement.textContent = formatPrice(total);
    
    // Update checkout summary
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutShipping = document.getElementById('checkoutShipping');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    if (checkoutSubtotal) checkoutSubtotal.textContent = formatPrice(subtotal);
    if (checkoutShipping) checkoutShipping.textContent = formatPrice(shipping);
    if (checkoutTotal) checkoutTotal.textContent = formatPrice(total);
    
    // Update receipt summary
    const receiptSubtotal = document.getElementById('receiptSubtotal');
    const receiptShipping = document.getElementById('receiptShipping');
    const receiptTotal = document.getElementById('receiptTotal');
    
    if (receiptSubtotal) receiptSubtotal.textContent = formatPrice(subtotal);
    if (receiptShipping) receiptShipping.textContent = formatPrice(shipping);
    if (receiptTotal) receiptTotal.textContent = formatPrice(total);
}

// Render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        // Show empty cart message
        cartItemsContainer.innerHTML = `
            <div class="text-center py-5" id="emptyCartMessage">
                <i class="bi bi-cart3" style="font-size: 3rem;"></i>
                <h3 class="mt-3">Your cart is empty</h3>
                <p class="text-muted">Add items to your cart to proceed with checkout</p>
            </div>
        `;
        return;
    }
    
    // Hide empty cart message if exists
    if (emptyCartMessage) {
        emptyCartMessage.style.display = 'none';
    }
    
    // Create cart items HTML
    let cartHTML = '';
    
    cart.forEach((item, index) => {
        cartHTML += `
            <div class="card mb-3 cart-item">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-3 col-md-2">
                            <img src="${item.image}" class="img-fluid rounded" alt="${item.name}">
                        </div>
                        <div class="col-9 col-md-4">
                            <h5 class="card-title mb-1">${item.name}</h5>
                            <p class="text-muted mb-1">Size: ${item.size}</p>
                            <p class="fw-bold mb-0">${formatPrice(item.price)}</p>
                        </div>
                        <div class="col-12 col-md-3 mt-3 mt-md-0">
                            <div class="input-group quantity-control">
                                <button class="btn btn-outline-secondary quantity-btn" 
                                    onclick="updateCartItemQuantity(${index}, Math.max(1, parseInt(document.getElementById('quantity-${index}').value) - 1))">
                                    <i class="bi bi-dash"></i>
                                </button>
                                <input type="number" class="form-control text-center" id="quantity-${index}" 
                                    value="${item.quantity}" min="1" max="10" 
                                    onchange="updateCartItemQuantity(${index}, this.value)">
                                <button class="btn btn-outline-secondary quantity-btn" 
                                    onclick="updateCartItemQuantity(${index}, Math.min(10, parseInt(document.getElementById('quantity-${index}').value) + 1))">
                                    <i class="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-md-2 mt-3 mt-md-0">
                            <div class="text-md-end fw-bold">${formatPrice(item.price * item.quantity)}</div>
                        </div>
                        <div class="col-12 col-md-1 mt-3 mt-md-0 text-end">
                            <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
}

// Render wishlist items
function renderWishlist() {
    const wishlistItemsContainer = document.getElementById('wishlistItems');
    const emptyWishlistMessage = document.getElementById('emptyWishlistMessage');
    
    if (!wishlistItemsContainer) return;
    
    if (wishlist.length === 0) {
        // Show empty wishlist message
        wishlistItemsContainer.innerHTML = `
            <div class="col-12 text-center py-5" id="emptyWishlistMessage">
                <i class="bi bi-heart" style="font-size: 3rem;"></i>
                <h3 class="mt-3">Your wishlist is empty</h3>
                <p class="text-muted">Add items to your wishlist to save them for later</p>
            </div>
        `;
        return;
    }
    
    // Hide empty wishlist message if exists
    if (emptyWishlistMessage) {
        emptyWishlistMessage.style.display = 'none';
    }
    
    // Create wishlist items HTML
    let wishlistHTML = '';
    
    wishlist.forEach((item, index) => {
        wishlistHTML += `
            <div class="col-md-3 mb-4">
                <div class="card h-100 product-card">
                    <div class="position-absolute top-0 end-0 m-2">
                        <button class="btn btn-sm btn-outline-danger" onclick="toggleWishlistItem({id: ${item.id}})">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <img src="${item.image}" class="card-img-top p-2" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text fw-bold">${formatPrice(item.price)}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    wishlistItemsContainer.innerHTML = wishlistHTML;
}

// Render checkout items summary
function renderCheckoutItems() {
    const checkoutItemsContainer = document.getElementById('checkoutItems');
    
    if (!checkoutItemsContainer) return;
    
    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = '<p class="text-muted">No items in cart</p>';
        return;
    }
    
    let checkoutHTML = '';
    
    cart.forEach(item => {
        checkoutHTML += `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                    <span class="fw-medium">${item.name}</span>
                    <div class="text-muted small">
                        Size: ${item.size} | Qty: ${item.quantity}
                    </div>
                </div>
                <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
        `;
    });
    
    checkoutItemsContainer.innerHTML = checkoutHTML;
}

// Handle payment method selection
function setupPaymentMethodSelection() {
    const paymentMethodCards = document.querySelectorAll('.payment-method-card');
    
    paymentMethodCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            paymentMethodCards.forEach(c => c.classList.remove('active-payment'));
            
            // Add active class to selected card
            this.classList.add('active-payment');
            
            // Hide all payment forms
            document.getElementById('creditCardForm').style.display = 'none';
            document.getElementById('bankTransferForm').style.display = 'none';
            document.getElementById('eWalletForm').style.display = 'none';
            
            // Show selected payment form
            const paymentMethod = this.getAttribute('data-payment-method');
            document.getElementById(paymentMethod + 'Form').style.display = 'block';
        });
    });
}

// Handle checkout process
function setupCheckoutProcess() {
    const proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
    const checkoutTab = document.getElementById('checkout-tab');
    
    if (proceedToCheckoutBtn && checkoutTab) {
        proceedToCheckoutBtn.addEventListener('click', function() {
            // Activate checkout tab
            const checkoutTabInstance = new bootstrap.Tab(checkoutTab);
            checkoutTabInstance.show();
        });
    }
    
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const checkoutForm = document.getElementById('checkoutForm');
    const orderConfirmation = document.getElementById('orderConfirmation');
    
    if (placeOrderBtn && checkoutForm && orderConfirmation) {
        placeOrderBtn.addEventListener('click', function() {
            // In a real application, you would validate the form here
            
            // Generate order ID
            const orderId = 'TX' + Math.floor(Math.random() * 1000000000).toString();
            document.getElementById('orderIdDisplay').textContent = orderId;
            
            // Set order date
            const orderDate = new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            document.getElementById('orderDateDisplay').textContent = orderDate;
            
            // Populate receipt items
            const receiptItems = document.getElementById('receiptItems');
            let receiptHTML = '';
            
            cart.forEach(item => {
                receiptHTML += `
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <div>
                            <span>${item.name} (${item.size}) × ${item.quantity}</span>
                        </div>
                        <span>${formatPrice(item.price * item.quantity)}</span>
                    </div>
                `;
            });
            
            receiptItems.innerHTML = receiptHTML;
            
            // Hide checkout form, show confirmation
            checkoutForm.style.display = 'none';
            orderConfirmation.style.display = 'block';
            
            // Clear cart
            cart = [];
            saveCartToLocalStorage();
            updateCartCount();
        });
    }
    
    // Continue shopping button
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeCartAndWishlist();
    setupPaymentMethodSelection();
    setupCheckoutProcess();
    
    // Set up tab handling to persist state
    const myTabs = document.querySelectorAll('button[data-bs-toggle="tab"]');
    myTabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function(e) {
            // Save active tab to localStorage
            localStorage.setItem('enclothed_active_tab', e.target.id);
        });
    });
    
    // Restore active tab
    const activeTab = localStorage.getItem('enclothed_active_tab');
    if (activeTab) {
        const tabToActivate = document.getElementById(activeTab);
        if (tabToActivate) {
            const tab = new bootstrap.Tab(tabToActivate);
            tab.show();
        }
    }
});

const cartTab = document.getElementById("cart-tab");
const wishlistTab = document.getElementById("wishlist-tab");
const checkoutTab = document.getElementById("checkout-tab");

function selectedCart() {
    cartTab.classList.add("active");
    wishlistTab.classList.remove("active");
    checkoutTab.classList.remove("active");

    setTabActive("cart");
}

function selectedWishlist() {
    cartTab.classList.remove("active");
    wishlistTab.classList.add("active");
    checkoutTab.classList.remove("active");

    setTabActive("wishlist");
}

function selectedCheckout() {
    cartTab.classList.remove("active");
    wishlistTab.classList.remove("active");
    checkoutTab.classList.add("active");

    setTabActive("checkout");
}

function setTabActive(tabId) {
    const tabs = ["cart", "wishlist", "checkout"];
    tabs.forEach(id => {
        const tabPane = document.getElementById(id);
        if (id === tabId) {
            tabPane.classList.add("show", "active");
        } else {
            tabPane.classList.remove("show", "active");
        }
    });
}
