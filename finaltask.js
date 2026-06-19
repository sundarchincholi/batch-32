let api = "https://fakestoreapi.com/products/";

fetch(api)
    .then((data) => {
       return data.json()
    })
    .then((js) => {
        console.log(js);
        let cart = [];

        // Product Display:

        function displayProducts(products) {
            let div1 = document.querySelector(".div1");
            div1.innerHTML = "";
            products.forEach((c) => {
                let card1 = document.createElement("div");
                card1.innerHTML = `
                    <img src="${c.image}">
                    <h1>${c.title}</h1>
                    <h2>Price: $${c.price}</h2>
                    <h2>${c.category}</h2>
                    <p>${c.description.slice(0, 100)}...</p>
                    <button class="addBtn">Add To Cart</button>`;

                let addBtn =card1.querySelector(".addBtn");
                addBtn.addEventListener("click", () => {
                    cart.push(c);
                    document.querySelector("#cartCount").textContent =`Cart: ${cart.length}`;
                    displayCart();
                    console.log(cart);
                });
                div1.append(card1);
            });
        }

        // Cart Display Function
        function displayCart() {
            let cartDiv =
                document.querySelector(".cart");
            cartDiv.innerHTML = "";
            if (cart.length === 0) {
                cartDiv.innerHTML =
                    "<h2>Cart Is Empty</h2>";
                return;
            }
            cart.forEach((product) => {
                let card =
                    document.createElement("div");
                card.innerHTML = `
                    <img src="${product.image}" width="100">
                    <h1>${product.title}</h1>
                    <h2>Price: $${product.price}</h2>
                    <h2>${product.category}</h2>
                    <p>${product.description.slice(0, 100)}...</p>
                    <button class="removeBtn">Remove</button>`;

                let removeBtn =card.querySelector(".removeBtn");
                removeBtn.addEventListener("click", () => {
                    cart = cart.filter(item => item !== product);
                    document.querySelector("#cartCount").textContent =`Cart: ${cart.length}`;
                    displayCart();
                });

                cartDiv.append(card);
            });
        }

        // Initial Display
        displayProducts(js);

        // Search Filter
        let btn =document.querySelector("#heading2");
        btn.addEventListener("click", () => {
            let search = prompt(`Enter Category:
men's clothing
women's clothing
electronics
jewelery`);

            if (!search) return;
            search = search.toLowerCase();
            let result = js.filter(product =>product.category.toLowerCase() === search);

            if (result.length === 0) {

                document.querySelector(".div1")
                    .innerHTML =
                    "<h1>No Products Found</h1>";
                return;
            }

            displayProducts(result);
        });

        // Category Dropdown Filter
        let dropdown =document.querySelector("#category");
        dropdown.addEventListener("change", () => {
            let category =dropdown.value;
            let result;
            if (category === "all") {
                result = js;
            } else {
                result = js.filter(product =>product.category === category);
            }

            displayProducts(result);
        });

        // Product Statistics

        console.log("Total Products:",js.length);

        let totalPrice =js.reduce((sum, product) =>sum + product.price,0);

        console.log("Average Price:",totalPrice / js.length);

        let highest =js.sort((a, b) =>b.price - a.price);

        console.log("Highest Product:",highest[0].title,highest[0].price);

        let lowest =js.sort((a, b) =>a.price - b.price);

        console.log("Lowest Product:",lowest[0].title,lowest[0].price);

    })

    .catch((error) => {
        console.log(error);
    })

    .finally(() => {
        console.log("Products Loaded Successfully");
    });