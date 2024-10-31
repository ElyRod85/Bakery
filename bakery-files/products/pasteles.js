window.onload = () => {
    const container = document.getElementById("productosContainer");

    fetch("products/pasteles.json")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
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

                container.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
};
