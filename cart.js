// start with an IIFE to keep the global namespace clean
(function() {
    // UI class for changing the user interface
    class CartView {
        // we only have one cart,
        // so we no longer need to clone a template and
        // append to a body
        constructor(element) {
            // here we only need the cart table
            // to append rows to,
            // so only one element reference to store:
            this.container = element;
            // subscribe to updateCart topic
            PubSub.subscribe("updateCart", (products) => this.updateCart(products));
        }

        // this is a "private" method, meant to be used from other methods only
        // hence the _
        _rowTemplate(productData) {
            return `<tr><td>${productData.name}</td><td class="has-text-right">${productData.price}</td></tr>`;
        }

        // build HTML based on product data and row template
        _buildCartHTML(productList) {
            let cartContent = "";
            for (const product of productList) {
                cartContent += this._rowTemplate(product);
            }
            return cartContent;
        }



        //zzzz
        // this is the public API for our cart UI objects:
        // method to change the UI by only changing the
        // content of the cart table
        updateCart(products) {
            this.container.innerHTML = this._buildCartHTML(products);
        }
    }

    // this way the other JS files can also use this class
    window.CartView = CartView;

    // Cart class for adding items to cart
    class CartModel {
        constructor() {
            this.items = [];

            // subscribe to the addToCart topic
            PubSub.subscribe("addToCart", (item) => this.addItem(item));
        }

        // API for Cart object
        addItem(item) {
            this.items.push(item);
            // publish updated item list to updateCart topic
            // when cart content updates
            PubSub.publish("updateCart", this.getItems());
        }
        getItems() {
            return this.items;
        }
    }

    // this way the other JS files can also use this class
    window.CartModel = CartModel;
})();