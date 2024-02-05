console.log('Hola Decorator')

//Component

class ProductComponent {

    constructor(name) {
        this.name = name
    }

    getDetail() {
        return `${this.name}`
    }
}

//Decorator

class ProductDecorator {
    constructor(ProductComponent) {
        this.ProductComponent = ProductComponent
    }

    getDetail() {
        return this.ProductComponent.getDetail()
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(productComponent, tradename, brand) {
        super(productComponent)

        this.tradename = tradename
        this.brand = brand
    }

    getDetail() {
        return `${this.tradename} ${this.brand} ${super.getDetail()}`
    }
}

//Decorator 2
class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent)

        this.price = price
    }

    getDetail() {
        return `${super.getDetail()} $ ${this.price}`
    }
}

//Decoratro 3
class HTMLProductDecorator extends ProductDecorator 
{
    getDetail(){
        return `<h2>Información del producto</h2>
        <p>
        ${super.getDetail()}
        </p>`
    }
}

//Ejecucion
//Component
const productComponent = new ProductComponent("Cerveza")
console.log(productComponent.getDetail());
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's")
console.log(commercialInfoProduct.getDetail())
const storeProduct = new StoreProductDecorator(productComponent, 15.5)
console.log(storeProduct.getDetail());
const product = new StoreProductDecorator(commercialInfoProduct, 1.55)
console.log(product.getDetail())
const htmlProductDecorator = new HTMLProductDecorator(product)
myDiv.innerHTML = htmlProductDecorator.getDetail()