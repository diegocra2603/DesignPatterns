console.log("Hola desde ts 2");

class Drink {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public info(): string {
        return this.name;
    }
}

const drink = new Drink("Agua");
console.log(drink.info())

//Interfaz
interface Product {
    price: number;
    getPrice(): string;
}

//Herencia
class Beer extends Drink implements Product {

    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price:number) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    getPrice(): string {
        return "$" + this.price;
    }

    public info(): string {
        return super.info() + " " + this.alcohol;
    }
}

//Implementacion de interface
class Snak implements Product {
    name:string;
    price: number;

    constructor(name:string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return "El precio es de: $" + this.price;
    }
}

const beer = new Beer("Erdinger", 8.5,10);
console.log(beer.info())

const products: Product[] = [
    new Beer("Corona", 4.5, 1),
    new Snak("Papas", 0.5),
    new Beer("Heineken", 5, 1.2),
];

function getPrices(items:Product[]){
    for(const item of items){
        console.log(item.getPrice());
    }
}

getPrices(products);