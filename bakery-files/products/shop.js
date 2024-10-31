window.onload = () => {
    const container = document.getElementById("productosContainer");

    if (!container) {
        console.error("Error");
        return;
    }

    fetch("products/shop.json")
        .then(response => response.json())
        .then(products => {

            const categories = {};

            products.forEach(product => {

                if (!categories[product.category]) {
                    categories[product.category] = [];
                }

                categories[product.category].push(product);
            });

            const categoryNames = Object.keys(categories);

            categoryNames.forEach((categoryName, index) => {

                const categorySection = document.createElement("div");
                categorySection.classList.add("category-section");

                const categoryTitle = document.createElement("h2");
                categoryTitle.textContent = categoryName;
                categorySection.appendChild(categoryTitle);

                const productGrid = document.createElement("div");
                productGrid.classList.add("productos");
                productGrid.id = `productos${categoryName.replace(/\s+/g, '')}`;
                categorySection.appendChild(productGrid);

                categories[categoryName].forEach(product => {
                    const productDiv = document.createElement("div");
                    productDiv.classList.add("producto");

                    productDiv.innerHTML = `
                        <a href="producto.html" class="product-link">
                        <img src="${product.image}" alt="${product.name}" class="prod-img">
                        <h3 class="prod-name">${product.name}</h3>
                        </a>
                        <p class="price">$${product.price}</p>
                        <div class="prod-btns">
                            <a href="#" class="prod-btn">Comprar</a>
                            <a href="#" class="prod-btn sec">Agregar</a>
                        </div>
                    `;
                    
                    productGrid.appendChild(productDiv);
                });

                container.appendChild(categorySection);

                if (index < categoryNames.length - 1) {
                    container.innerHTML += `
                        <div class="divider">
                            <span class="separator">
                                <div class="logo">
                                    <img src="imgs/catita-cat-logo.webp" alt="Catita section divider">
                                </div>
                            </span>
                        </div>
                    `;
                }
            });
        })
        .catch(error => {
            console.error("Error", error);
        });
};
