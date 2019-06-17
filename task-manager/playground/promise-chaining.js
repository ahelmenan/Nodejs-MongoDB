require('../src/db/mongoose');
const User = require('../src/db/models/user');

User.findByIdAndUpdate('5cfa4896a46acd359c1eb517', { __v : 2}).then((user) => {
    console.log(user);
    return User.countDocuments({__v : 2})
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})