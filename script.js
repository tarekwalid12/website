// JavaScript to handle navigation and display logic

function navigate(page) {
    // Hide all pages
    document.getElementById('homepage').classList.add('hidden');
    document.getElementById('shop-page').classList.add('hidden');
    document.getElementById('design-page').classList.add('hidden');

    // Show selected page
    if (page === 'shop') {
        document.getElementById('shop-page').classList.remove('hidden');
    } else if (page === 'design') {
        document.getElementById('design-page').classList.remove('hidden');
    } else if (page === 'men' || page === 'women' || page === 'kids') {
        loadProductCategories(page);
    } else if (page === 'choose-product') {
        loadDesignOptions();
    }
}

function loadProductCategories(category) {
    const productCategories = document.getElementById('product-categories');
    productCategories.innerHTML = ''; // Clear existing categories
    productCategories.classList.remove('hidden');

    let products = [];
    if (category === 'men' || category === 'women') {
        products = ['T-shirt', 'Tank Tops', 'Long-sleeved Shirts', 'Hoodies and Sweatshirts'];
    } else if (category === 'kids') {
        products = ['T-shirt', 'Long-sleeved Shirts', 'Hoodies and Sweatshirts', 'Baby One Pieces'];
    }

    products.forEach(product => {
        const btn = document.createElement('button');
        btn.innerText = product;
        btn.onclick = () => alert('Product selected: ' + product);
        productCategories.appendChild(btn);
    });
}

function loadDesignOptions() {
    const designOptions = document.getElementById('design-options');
    designOptions.innerHTML = ''; // Clear existing options
    designOptions.classList.remove('hidden');

    const products = ['T-shirt', 'Tank Tops', 'Long-sleeved Shirts', 'Hoodies and Sweatshirts'];
    products.forEach(product => {
        const btn = document.createElement('button');
        btn.innerText = product;
        btn.onclick = () => alert('Design product selected: ' + product);
        designOptions.appendChild(btn);
    });
}
