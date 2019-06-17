
require('../src/db/mongoose');
const Product = require('../src/db/models/product');

// Product.findByIdAndDelete('5cfa5249b5e02a1f0403dba1').then(() => {
//     console.log('deletion complete');
//     return Product.countDocuments({completed : false})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndUpdate = async (id) => {
    if (!id)
        throw Error('id not found');
    if(dlt = await Product.findByIdAndDelete(id))
        console.log(dlt);
        
    const count = await Product.countDocuments({completed : false});
    return count; 
}

deleteTaskAndUpdate('5cfa72b79708d72f0c8fd954').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})