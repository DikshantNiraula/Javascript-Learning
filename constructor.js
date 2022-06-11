class Product {
    //class have constructor
    constructor(name, price, model) {
        this.name = name;
        this.price = price;
        this.model = model;
    }

    //Method to get price
    getPrice() {
        return this.price;
    }
}

export default Product;