const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keybord', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
]

const renderProduct = (title, price) => {
    return `<div class="product-item col">
                <center>
                <h3 class="">${title}</h3>
                <p class="">${price}</p>
                <button class="by-btn">Добавить в корзину</button>
                </div>
                </center>
    `
}

const renderProducts = (list) => {
    const productList = list.map((product) => {
        return renderProduct(product.title, product.price)
    })
    document.querySelector(".products").innerHTML = productList.join(" ")
}

renderProducts(products)
