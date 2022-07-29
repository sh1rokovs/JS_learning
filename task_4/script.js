class ProductList {
    constructor(container = ".products"){
        this.container = container
        this.goods = []
        this.allProducts = []
        this.#fetchGoods()
        this.render()
    }

    #fetchGoods() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keybord', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ]
    }

    render() {
        const block = document.querySelector(this.container)

        for (let product of this.goods) {
            const productObject = new ProductItem(product)

            this.allProducts.push(productObject)
            block.insertAdjacentHTML('beforeend', productObject.render())
        }
    }
}

class ProductItem {
    constructor(product, img="") {
        this.title = product.title
        this.price = product.price
        this.id = product.id
        this.img = img
    }

    render() {
        return `<div class="product-item col" data-id="${this.id}">
        <center>
        <img src="${this.img}" alt="some img">
        <h3 class="">${this.title}</h3>
        <p class="">${this.price} \u20bd</p>
        <button class="buy-btn">Купить</button>
        </div>
        </center>`
    }
}

new ProductList()

/* const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keybord', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
]

const renderProduct = (item, img="") => `<div class="product-item col" data-id="${this.id}">
                <center>
                <img src="${img}" alt="some img">
                <h3 class="">${item.title}</h3>
                <p class="">${item.price}</p>
                <button class="by-btn">Добавить в корзину</button>
                </div>
                </center>`

const renderProducts = (list) => {
    const productList = list.map(item => renderProduct(item))
    document.querySelector(".products").insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(" "))
}

renderProducts(products) */
