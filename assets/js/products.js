// Products data in JSON format
const products = [
    {
        id: 1,
        name: "Short Sleeve Pajama Set",
        price: 199000,
        image: "assets/img/product/pajama-set.jpg",
        description: "Comfortable cotton pajama set featuring short sleeves and loose-fitting shorts. Perfect for warm nights with a cozy yet breathable feel.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue", "Pink", "Gray"],
        material: "100% Cotton",
        category: "Women"
    },
    {
        id: 2,
        name: "V-Neck Cable Knit Cardigan",
        price: 299900,
        image: "assets/img/product/vneck-cableknit.jpg",
        description: "Stylish V-neck cardigan with detailed cable knit pattern. Features button-up front and ribbed cuffs for a sophisticated layering piece.",
        sizes: ["S", "M", "L"],
        colors: ["Beige", "Black", "Navy"],
        material: "70% Acrylic, 30% Wool",
        category: "Women"
    },
    {
        id: 3,
        name: "Long Sleeve Butterfly Sweater",
        price: 279900,
        image: "assets/img/product/sleeve-butterfly.jpg",
        description: "Cozy sweater featuring unique butterfly pattern embroidery. Soft-touch fabric with comfortable long sleeves and slightly loose fit.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Light Pink"],
        material: "65% Cotton, 35% Polyester",
        category: "Women"
    },
    {
        id: 4,
        name: "Double Loop Top",
        price: 159000,
        image: "assets/img/product/double.jpg",
        description: "Elegant top with unique double loop design. Features a flattering fit with slightly stretchy fabric for maximum comfort.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["White", "Black", "Red"],
        material: "95% Rayon, 5% Spandex",
        category: "Women"
    },
    {
        id: 5,
        name: "Double Layered Long Sleeve Top",
        price: 259900,
        image: "assets/img/product/double layered long sleeve top.jpg",
        description: "Sophisticated top with layered design creating a chic look. Features comfortable long sleeves and soft fabric. Great for both casual and semi-formal occasions.",
        sizes: ["S", "M", "L"],
        colors: ["White", "Black"],
        material: "60% Cotton, 40% Polyester",
        category: "Women"
    },
    {
        id: 6,
        name: "Bow Knot Fitted Top",
        price: 149000,
        image: "assets/img/product/bow knot fitted top.jpg",
        description: "Stylish fitted top with elegant bow knot detail. Form-fitting design accentuates your silhouette while providing comfortable stretch.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "White", "Navy"],
        material: "92% Polyester, 8% Elastane",
        category: "Women"
    },
    {
        id: 7,
        name: "Button Up Puff Sleeve Blouse",
        price: 149900,
        image: "assets/img/product/button up puff sleeve blouse.jpg",
        description: "Romantic blouse featuring puff sleeves and front button closure. Lightweight fabric with slightly textured feel for a feminine touch.",
        sizes: ["S", "M", "L"],
        colors: ["White", "Light Blue", "Pink"],
        material: "100% Cotton",
        category: "Women"
    },
    {
        id: 8,
        name: "Openwork Ruffled Cardigan",
        price: 279900,
        image: "assets/img/product/openwork ruffled cardigan.jpg",
        description: "Delicate openwork cardigan with beautiful ruffle details. Perfect lightweight layer for adding texture and interest to any outfit.",
        sizes: ["S", "M", "L"],
        colors: ["Cream", "Light Pink"],
        material: "55% Cotton, 45% Acrylic",
        category: "Women"
    },
    {
        id: 9,
        name: "Tied Front Short Sleeve Blouse",
        price: 149000,
        image: "assets/img/product/Tied Front Short Sleeve Blouse.jpg",
        description: "Casual-chic blouse with front tie detail. Features short sleeves and a slightly cropped fit, perfect for pairing with high-waisted bottoms.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["White", "Light Blue", "Peach"],
        material: "100% Rayon",
        category: "Women"
    },
    {
        id: 10,
        name: "Contrast Stitch Oversized Jacket",
        price: 329000,
        image: "assets/img/product/Contrast Stitch Oversized Jacket.jpg",
        description: "Trendy oversized jacket with eye-catching contrast stitching. Features roomy pockets and relaxed fit for the perfect statement outerwear piece.",
        sizes: ["S", "M", "L"],
        colors: ["Black/White", "Navy/Cream"],
        material: "80% Cotton, 20% Polyester",
        category: "Women"
    },
    {
        id: 11,
        name: "Cropped Twill Vest Blue",
        price: 239000,
        image: "assets/img/product/Cropped Twill Vest Blue.jpg",
        description: "Stylish cropped vest in durable twill fabric. Features front button closure and structured fit for a contemporary silhouette.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Blue"],
        material: "100% Cotton Twill",
        category: "Women"
    },
    {
        id: 12,
        name: "Notch Collar Pocket Shirt",
        price: 149900,
        image: "assets/img/product/Notch Collar Pocket Shirt.jpg",
        description: "Classic shirt with notched collar and practical front pocket. Relaxed fit with a slightly structured shoulder for a smart-casual look.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Light Blue", "Striped"],
        material: "100% Cotton",
        category: "Women"
    },
    {
        id: 13,
        name: "Off Shoulder Zipped Long Sleeve Top",
        price: 279000,
        image: "assets/img/product/Off Shoulder Zipped Long Sleeve Top.jpg",
        description: "Edgy off-shoulder top with functional zipper detail. Stretchy, form-fitting fabric accentuates your silhouette while providing comfort.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Red"],
        material: "92% Polyester, 8% Elastane",
        category: "Women"
    },
    {
        id: 14,
        name: "Lettuce Hem Long Sleeve Top",
        price: 179000,
        image: "assets/img/product/Lettuce Hem Long Sleeve Top.jpg",
        description: "Trendy top with distinctive lettuce edge hem detail. Soft, stretchy fabric with slim fit for a flattering look.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "White", "Pink"],
        material: "95% Cotton, 5% Elastane",
        category: "Women"
    },
    {
        id: 15,
        name: "Stripes Knit Cardigan Blue",
        price: 179000,
        image: "assets/img/product/Stripes Knit Cardigan Blue.jpg",
        description: "Cozy striped cardigan in a relaxed fit. Features button-up front and comfortable ribbed cuffs for a casual everyday layer.",
        sizes: ["S", "M", "L"],
        colors: ["Blue/White"],
        material: "60% Cotton, 40% Acrylic",
        category: "Women"
    },
    {
        id: 16,
        name: "Open Work Long Sleeve Cardigan Dark Grey",
        price: 279000,
        image: "assets/img/product/Open Work Long Sleeve Cardigan Dark Grey.jpg",
        description: "Elegant open work cardigan with intricate knit pattern. Lightweight yet warm, perfect for layering during transitional seasons.",
        sizes: ["S", "M", "L"],
        colors: ["Dark Grey"],
        material: "55% Acrylic, 30% Nylon, 15% Wool",
        category: "Women"
    },
    {
        id: 17,
        name: "Bomber Jacket",
        price: 425000,
        image: "assets/img/product/jaket bomber ringan.jpg",
        description: "Versatile bomber jacket with ribbed collar and cuffs. Lightweight design perfect for casual outings, with practical side pockets.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Olive"],
        material: "65% Polyester, 35% Cotton",
        category: "Men"
    },
    {
        id: 18,
        name: "Relief Cambridge T-Shirt",
        price: 350000,
        image: "assets/img/product/kaus teks relief cambridge.jpg",
        description: "Classic tee featuring embossed Cambridge text. Comfortable regular fit with premium cotton fabric for everyday style.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Grey"],
        material: "100% Cotton",
        category: "Men"
    },
    {
        id: 19,
        name: "Cotton Linen Shirts",
        price: 332000,
        image: "assets/img/product/kemeja linen katun.jpg",
        description: "Breathable cotton-linen blend shirt with relaxed fit. Perfect for warm weather with a natural, textured look and feel.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Beige", "Light Blue"],
        material: "55% Linen, 45% Cotton",
        category: "Men"
    },
    {
        id: 20,
        name: "Striped Jacquard Polo Shirt",
        price: 385000,
        image: "assets/img/product/KEMEJA POLO JACQUARD BERGARIS.jpg",
        description: "Sophisticated polo shirt with textured jacquard stripes. Features classic collar and partial button placket for a refined casual look.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Burgundy", "Forest Green"],
        material: "95% Cotton, 5% Elastane",
        category: "Men"
    },
    {
        id: 21,
        name: "Sweatshirt Plain Hooded",
        price: 560000,
        image: "assets/img/product/SWEATSHIRT PLAIN HOODED.jpg",
        description: "Minimalist hooded sweatshirt with kangaroo pocket. Soft brushed interior provides warmth and comfort for everyday casual wear.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Grey", "Navy"],
        material: "80% Cotton, 20% Polyester",
        category: "Men"
    },
    {
        id: 22,
        name: "Imitation Leather Jacket",
        price: 645000,
        image: "assets/img/product/IMITATION LEATHER JACKET.jpg",
        description: "Sleek imitation leather jacket with zippered front. Features quilted lining and multiple pockets for a modern, edgy appearance.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Brown"],
        material: "100% Polyurethane Outer, 100% Polyester Lining",
        category: "Men"
    },
    {
        id: 23,
        name: "Basic Sweatshirt Zipper Collar",
        price: 390000,
        image: "assets/img/product/BASIC SWEATSHIRT ZIPPER COLLAR.jpg",
        description: "Casual sweatshirt with stand collar and quarter-zip design. Perfect lightweight layer for transitional weather with ribbed trim.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Grey", "Navy", "Black"],
        material: "65% Cotton, 35% Polyester",
        category: "Men"
    },
    {
        id: 24,
        name: "Linen Shirt",
        price: 290000,
        image: "assets/img/product/LINEN SHIRT.jpg",
        description: "Classic linen shirt with button-down design. Breathable fabric perfect for warm weather with a relaxed yet polished appearance.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Beige", "Light Blue"],
        material: "100% Linen",
        category: "Men"
    },
    {
        id: 25,
        name: "Bisban Campuh Jacket",
        price: 375000,
        image: "assets/img/product/BISBAN CAMPUH JACKET.jpg",
        description: "Unique jacket with distinctive textile binding details. Combines traditional elements with modern cut for a standout casual piece.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy"],
        material: "70% Cotton, 30% Polyester",
        category: "Men"
    },
    {
        id: 26,
        name: "Suede Effect Jacket",
        price: 479990,
        image: "assets/img/product/SUEDE EFFECT JACKET.jpg",
        description: "Premium jacket with luxurious faux suede finish. Features snap button closure and clean lines for a sophisticated silhouette.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Tan", "Dark Brown"],
        material: "90% Polyester, 10% Elastane",
        category: "Men"
    },
    {
        id: 27,
        name: "Relaxed Fit Zipper Outer Shirt",
        price: 425000,
        image: "assets/img/product/RELAXED FIT ZIPPER OUTER SHIRT.jpg",
        description: "Versatile shirt jacket with full zipper closure. Relaxed fit allows for easy layering with practical chest pockets.",
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["Olive", "Grey", "Navy"],
        material: "60% Cotton, 40% Polyester",
        category: "Men"
    },
    {
        id: 28,
        name: "Vertical Structured Polo Shirt",
        price: 290000,
        image: "assets/img/product/VERTICAL STRUCTURED POLO SHIRT.jpg",
        description: "Modern polo with vertical textured stripes. Tailored fit with structured fabric provides a smart appearance for casual occasions.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Blue", "Black"],
        material: "100% Cotton Piqué",
        category: "Men"
    },
    {
        id: 29,
        name: "Imitation Leather Outer Shirt",
        price: 300000,
        image: "assets/img/product/IMITATION LEATHER OUTER SHIRT.jpg",
        description: "Contemporary shirt jacket in smooth imitation leather. Features button closure and shirt collar for a refined yet edgy look.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Brown"],
        material: "100% Polyurethane Outer, 100% Polyester Lining",
        category: "Men"
    },
    {
        id: 30,
        name: "Suede Effect Bomber Jacket",
        price: 450000,
        image: "assets/img/product/SUEDE EFFECT BOMBER JACKET.jpg",
        description: "Classic bomber silhouette with soft suede-like finish. Features ribbed collar, cuffs and hem with front zip closure.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Camel", "Grey", "Navy"],
        material: "90% Polyester, 10% Elastane",
        category: "Men"
    },
    {
        id: 31,
        name: "Contrast Collar Polo Shirt",
        price: 325000,
        image: "assets/img/product/CONTRAST COLLAR POLO SHIRT.jpg",
        description: "Distinctive polo with contrasting collar. Premium piqué fabric offers comfort while the two-tone design adds visual interest.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy/White", "Black/Grey", "White/Navy"],
        material: "100% Cotton Piqué",
        category: "Men"
    },
    {
        id: 32,
        name: "Contrast Rib Basic T-Shirt",
        price: 225000,
        image: "assets/img/product/CONTRAST RIB BASIC T-SHIRT.jpg",
        description: "Essential t-shirt with contrasting ribbed neckline. Soft cotton jersey with regular fit for everyday comfort and style.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Grey"],
        material: "100% Cotton",
        category: "Men"
    }
];

// Format price to currency
function formatPrice(price) {
    return 'IDR ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Create product card HTML
function createProductCard(product) {
    // Check if product is in wishlist to show filled heart
    const isWishlisted = window.isInWishlist ? window.isInWishlist(product.id) : false;
    const heartClass = isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart';
    
    return `
        <div class="col-md-3 mb-4">
            <div class="card h-100 product-card" data-product-id="${product.id}">
                <img src="${product.image}" class="card-img-top p-2" alt="${product.name}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <h5 class="card-title">${product.name}</h5>
                        <a href="#" class="wishlist-btn" data-product-id="${product.id}">
                            <i class="bi ${heartClass}"></i>
                        </a>
                    </div>
                    <p class="card-text fw-bold">${formatPrice(product.price)}</p>
                    <p class="card-text small text-muted">${product.category}</p>
                </div>
                <div class="card-footer bg-white border-top-0">
                    <button class="btn btn-outline-primary w-100 view-details" data-product-id="${product.id}">View Details</button>
                </div>
            </div>
        </div>
    `;
}

// Display all products
function displayProducts(productsToDisplay = products) {
    const productsContainer = document.getElementById('productsContainer');
    
    if (!productsContainer) return;
    
    if (productsToDisplay.length === 0) {
        productsContainer.innerHTML = '<div class="col-12 text-center"><p>No products found matching your search.</p></div>';
        return;
    }
    
    let productsHTML = '';
    productsToDisplay.forEach(product => {
        productsHTML += createProductCard(product);
    });
    
    productsContainer.innerHTML = productsHTML;
    
    // Add event listeners to the newly created product cards
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            openProductModal(productId);
        });
    });
    
    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.getAttribute('data-product-id'));
            const product = products.find(p => p.id === productId);
            
            if (product && window.toggleWishlistItem) {
                window.toggleWishlistItem(product);
                
                // Update heart icon
                const icon = this.querySelector('i');
                icon.classList.toggle('bi-heart');
                icon.classList.toggle('bi-heart-fill');
                icon.classList.toggle('text-danger');
            }
        });
    });
    
    // Product card click event for opening modal
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Ignore clicks on wishlist button
            if (e.target.closest('.wishlist-btn') || e.target.closest('.view-details')) {
                return;
            }
            
            const productId = parseInt(this.getAttribute('data-product-id'));
            openProductModal(productId);
        });
    });
}

// Open product details modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Set modal content
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductPrice').textContent = formatPrice(product.price);
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductImage').src = product.image;
    
    // Populate sizes dropdown
    const sizeSelect = document.getElementById('sizeSelect');
    sizeSelect.innerHTML = '';
    product.sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
    });
    
    // Reset quantity to 1
    document.getElementById('quantityInput').value = 1;
    
    // Store current product ID in modal for add to cart functionality
    document.getElementById('productModal').setAttribute('data-current-product-id', product.id);
    
    // Show the modal
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();
}

// Global variable to track current category filter
let currentCategoryFilter = 'all';

// Search products with category filter
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    
    let filteredProducts = products;
    
    // Apply category filter first
    if (currentCategoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category.toLowerCase() === currentCategoryFilter.toLowerCase()
        );
    }
    
    // Then apply search term filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => {
            return (
                product.name.toLowerCase().includes(searchTerm) || 
                (product.description && product.description.toLowerCase().includes(searchTerm)) ||
                (product.material && product.material.toLowerCase().includes(searchTerm))
            );
        });
    }
    
    displayProducts(filteredProducts);
}

// Sort products (modified to work with category filter)
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sortedProducts = [...products];
    
    // Apply current category filter first (don't change it here)
    if (currentCategoryFilter !== 'all') {
        sortedProducts = sortedProducts.filter(product => 
            product.category.toLowerCase() === currentCategoryFilter.toLowerCase()
        );
    }
    
    // Apply sorting without changing category filter
    switch (sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'mens':
            // Just sort, don't change filter here
            sortedProducts = sortedProducts.filter(product => 
                product.category.toLowerCase() === 'men'
            );
            break;
        case 'womens':
            // Just sort, don't change filter here
            sortedProducts = sortedProducts.filter(product => 
                product.category.toLowerCase() === 'women'
            );
            break;
        default:
            // Default sorting (by ID)
            sortedProducts.sort((a, b) => a.id - b.id);
    }
    
    displayProducts(sortedProducts);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Display all products
    displayProducts();
    
    // Setup search
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            searchProducts();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
    
    // Setup sorting
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }
    
    /// Add category filter buttons if they exist
    const categoryButtons = document.querySelectorAll('[data-category-filter]');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentCategoryFilter = this.getAttribute('data-category-filter');
            
            // Update active state of buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Reset sort select to default
            document.getElementById('sortSelect').value = 'default';
            
            // Apply the filter
            searchProducts();
        });
    });
    
    // Setup quantity controls
    setupQuantityControls();
    
    // Setup add to cart button
    setupAddToCartButton();
    
    // Setup add to wishlist button
    setupAddToWishlistButton();
});

// Quantity increment/decrement
function setupQuantityControls() {
    const quantityDecrement = document.getElementById('quantityDecrement');
    const quantityIncrement = document.getElementById('quantityIncrement');
    
    if (quantityDecrement && quantityIncrement) {
        quantityDecrement.addEventListener('click', function() {
            const input = document.getElementById('quantityInput');
            const value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
            }
        });
        
        quantityIncrement.addEventListener('click', function() {
            const input = document.getElementById('quantityInput');
            const value = parseInt(input.value);
            if (value < 10) {
                input.value = value + 1;
            }
        });
    }
}

// Add to cart functionality
function setupAddToCartButton() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const modal = document.getElementById('productModal');
            const productId = parseInt(modal.getAttribute('data-current-product-id'));
            const product = products.find(p => p.id === productId);
            
            if (!product) return;
            
            const size = document.getElementById('sizeSelect').value;
            const quantity = document.getElementById('quantityInput').value;
            
            // Add to cart using cart.js function if available
            if (window.addToCart) {
                window.addToCart(product, quantity, size);
                
                // Show success message
                alert(`Added to cart: ${quantity} × ${product.name} (Size: ${size})`);
            } else {
                // Fallback if cart.js is not loaded
                alert(`Added to cart: ${quantity} × ${product.name} (Size: ${size})`);
            }
            
            // Close the modal after adding to cart
            const productModal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
            productModal.hide();
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Display all products
    displayProducts();
    
    // Setup search
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    
    if (searchButton) {
        searchButton.addEventListener('click', searchProducts);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
    
    // Setup sorting
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }
    
    // Setup quantity controls
    setupQuantityControls();
    
    // Setup add to cart button
    setupAddToCartButton();
    
    // Setup add to wishlist button
    setupAddToWishlistButton();
});