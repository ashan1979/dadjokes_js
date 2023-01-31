let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
    if (filteredProducts.length < 1) {
        productsContainer.innerHTML = `<h6>Sorry, No Products Matched Your Search</h6>`
        return;
    }

    productsContainer.innerHTML = filteredProducts.map((product) => {
        const { id, title, image, price } =  product;
        return `<article class="product" data-id="${id}">
                <img src="${image}"
                class="product-img img"
                alt=""/>
                <footer>
                    <h5 class="product-name">${title}</h5>
                    <span class="product-price">${price}</span>
                </footer>
                </article>`;

    })
    .join('');
}