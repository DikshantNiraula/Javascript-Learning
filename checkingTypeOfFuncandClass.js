function Product() {
    return "apple";
}
//Function

let Product1 = {
    title: "Apple",
    email: "js@gmail.com",
};
// Object

class Product2 {
    constructor(title, email) {
        (this.title = title), (this.email = email);
    }
}
//FUnction, Not Object but Template for Object
//we can make template as
///////////////////////////////////////////////////////////////////
// let newProduct = new Product2("T-shirt", "1200");
// console.log(newProduct);

////////////////////////////////////////////////////////////////////////
// let title = Product1.title;
// console.log(title);
/////////////////////////////////////////////////////////////////////////

// let func = Product();
// console.log(func);

export { Product, Product1, Product2 };