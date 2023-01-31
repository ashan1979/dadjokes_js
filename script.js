let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
    if (filteredProducts.length < 1) {
        productsContainer.innerHTML = `<h6>Sorry, No Products Matched Your Search</h6>`
        return;
    }
}