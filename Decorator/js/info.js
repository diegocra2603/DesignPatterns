// Component
class ClientComponent {
    constructor(url){
        this.url = url;
    }

    async getData(){
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}

//Decorator
class ClientDecorator{
    constructor(clientComponent){
        this.clientComponent = clientComponent;
    }

    async getData(){
        return await this.clientComponent.getData();
    }
}

// Decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
    async getData(){
        const data = await super.getData();

        const newData = data.map(e => {
            e.title = e.title.toUpperCase();
            return e;
        });

        return newData;
    }
}

//Decorator 2
class HtmlClientDecorator extends ClientDecorator {
    async getData(){
        const data = await super.getData();

        const newData = data.map(e => {
            e.title = `<h1>${e.title}</h1>`;
            e.thumbnailUrl = `<img src='${e.thumbnailUrl}' />`;
            return e;
        });

        return newData;
    }
}

(async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const clientComponent = new ClientComponent(url);
    const data = await clientComponent.getData();
    console.log(data);

    const upperCaseClient = new UpperCaseClientDecorator(clientComponent);
    const dataUpper = await upperCaseClient.getData();
    console.log(dataUpper);

    const htmlClient = new HtmlClientDecorator(upperCaseClient);
    const dataHtml = await htmlClient.getData();

    const htmlClient2 = new HtmlClientDecorator(clientComponent);
    const dataHtml2 = await htmlClient2.getData();
    
    divContent1.innerHTML = dataHtml.reduce((acc, e) => {
        return acc + e.title + e.thumbnailUrl;
    },"");

    divContent2.innerHTML = dataHtml2.reduce((acc, e) => {
        return acc + e.title + e.thumbnailUrl;
    },"");

})();