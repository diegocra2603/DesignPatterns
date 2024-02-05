// class SaleContext {

//     constructor(strategy) {
//         this.setStrategy(strategy)
//     }

//     setStrategy(strategy){
//         this.strategy = strategy
//     }

//     calculate(amount) {
//         return this.strategy.calculate(amount)
//     }
// }

// class RegularSaleStrategy{
//     constructor(tax){
//         this.tax = tax
//     }
//     calculate(amount){
//         return amount + (amount * this.tax);
//     }
// }

// class DiscountSaleStrategy{
//     constructor(tax, discount) {
//         this.tax = tax
//         this.discount = discount
//     }

//     calculate(amount){
//         return amount + (amount * this.tax) - this.discount;
//     }
// }

// class ForeignSaleStrategy{

//     calculate(amount){
//         return amount * this.getDollarPrice();
//     }

//     getDollarPrice(){
//         return 20;
//     }
// }

// const regularSale = new RegularSaleStrategy(0.16)
// const discountSale = new DiscountSaleStrategy(0.16,3)
// const foreignSale = new ForeignSaleStrategy();

// const sale = new SaleContext(regularSale)
// console.log(sale.calculate(10))
// sale.setStrategy(discountSale);
// console.log(sale.calculate(10))
// sale.setStrategy(foreignSale);
// console.log(sale.calculate(10))

//Explicacion Practica -------------------------------------------------------------

const data = [
    {
        name: "Erdinger Pikantus",
        country: "Alemania",
        info: "Erdinger Pikantus es una cerveza de trigo oscura y fuerte producida por Erdinger Weissbräu. Introducida en 2001, se ha convertido en una de las cervezas de trigo más populares. Con un contenido de alcohol del 7,3% vol., es una variante de Dunkelweizen",
        img: "https://birrapedia.com/img/modulos/cerveza/8dc/cerveza-erdinger-pikantus_14458806492307_t.jpg"
    },
    {
        name: "Corona",
        country: "México",
        info: "Corona es una marca de cerveza fundada en 1926, producida en múltiples cervecerias en México y exportada a mercados de todo el mundo. La empresa belga Anheuser-Busch InBev es propietaria de la cerveza en todos los demás mercados. Es la marca de cerveza importada más vendida en los Estados Unidos. ",
        img: "https://walmartgt.vtexassets.com/arquivos/ids/366220-1200-900?v=638199670264570000&width=1200&height=900&aspect=true"
    },
    {
        name: "Delirium Tremens",
        country: "Belgica",
        info: "Delirium Tremens es una marca de cerveza belga pale ale de triple fermentación producida por la cervecería Huyghe en Melle, provincia de Flandes Oriental.",
        img: "https://res.cloudinary.com/imporbeer/images/f_auto,q_auto/v1691083813/6/6.png?_i=AA"
    }
]

class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy)
        this.data = data
        this.element = element
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    show() {
        this.strategy.show(this.data, this.element)
    }
}

class ListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                            <h2>${beer.name}</h2>
                            <p>${beer.country}</p>
                        </div>
                        <hr/>`
        }, "")
    }
}

class DetailListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                            <h2>${beer.name}</h2>
                            <p>${beer.country}</p>
                            <p>${beer.info}</p>
                        </div>
                        <hr/>`
        }, "")
    }
}

class ListWithImagesStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                            <img width="10%" src="${beer.img}"/>
                            <h2>${beer.name}</h2>
                        </div>
                        <hr/>`
        }, "")
    }
}

const strategies = [
    new ListStrategy(),
    new DetailListStrategy(),
    new ListWithImagesStrategy()
]

const info = new InfoContext(new ListStrategy(), data, content)
info.show()

slcOptions.addEventListener("change", (event) => {
    const op = event.target.value
    info.setStrategy(strategies[op])
    info.show()
});
