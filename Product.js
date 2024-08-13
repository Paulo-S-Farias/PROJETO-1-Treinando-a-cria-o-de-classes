class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discountPercentage) {
        const discountAmount = (this.price * discountPercentage) / 100
        return this.price - discountAmount
    }
}

const product = new Product('Notebook', 'Notebook Nitro 7', '2000')
product.addToStock (10)

console.log(`Nome do produto: ${product.name}`)
console.log(`Descrição do produto: ${product.description}`)
console.log(`Valor do produto: R$${product.price}.00`)
console.log(`Quantidade no estoque: ${product.inStock}`)
console.log('=====================================')

const discount = 10
const discountedPrice = product.calculateDiscount(discount)

console.log(`Desconto no produto: ${discount}%`)
console.log(`Novo valor do produto: R$${discountedPrice}.00`)