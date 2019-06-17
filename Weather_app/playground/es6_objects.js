const name = 'Sayf';
const degree = 10;


const student = {
        name,
        degree,
        class : 5
}

console.log(student);

const product = {
    label : 'black book',
    price : 3,
    stock : 2000,
    slePrice : undefined,
    rating : 5.3
}

const {label:description, price, type = 'book'} = product;

console.log(description);


