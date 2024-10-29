window.onload = () => {
    const container = document.getElementById("productosContainer");

    fetch("products/muffins.json")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("producto");

                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="prod-img">
                    <h3 class="prod-name">${product.name}</h3>
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
