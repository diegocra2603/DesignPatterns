interface Component {
    getDetail(): string;
}

class ProductComponent implements Component {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    getDetail(): string {
        return `${this.name}`;
    }

}

// Decorator
abstract class ProductDecorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }
}

// Decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
    private tradename: string;
    private brand: string;

    constructor(component: Component, tradename: string, brand: string) {
        super(component);
        this.tradename = tradename;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradename} ${this.brand} ` +
            super.getDetail();
    }
}

// Decorator 2
class StoreProductDecorator extends ProductDecorator {
    private price:number;
    
    constructor(component: Component, price: number){
        super(component);
        this.price = price;
    }
    public getDetail(): string {
        return super.getDetail() + ` $${this.price}`;
    }
}

//Decorator 3
class HTMLProductDecorator extends ProductDecorator{
    public getDetail(): string {
        return `<h1>Información del producto</h1>
        <p>
            ${super.getDetail()}
        </p>`;
    }
}

//Ejecucion
//Component
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

//Decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProduct.getDetail());

//Decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

//Decorator 2 con Decorator1
const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(storeProduct2.getDetail());

// Decorator 3 con decorator 2 con decorator 1
const htmlProduct = new HTMLProductDecorator(storeProduct2);
console.log(htmlProduct.getDetail());