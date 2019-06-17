// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;


//destructuring : 
const {MongoClient, ObjectID} = require('mongodb');

// id :
// const id = new ObjectID();
// console.log(id.id.length)
// console.log(id.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true} , (error, client) => {
    if (error)
        return console.log('Unable to access to Database');
    const db = client.db(databaseName)

    // db.collection('products').findOne({ _id: new ObjectID('5cf405ba8f155507acd13aa7')}, (error, product) => {
    //     if (error)
    //         return console.log('Unable to fetsh');
    //     console.log(product);
    // })
    // db.collection('products').find({completed : false }).toArray((error, product) => {
       
    //     console.log(product);
        
    // })
    db.collection('products').updateMany({
        completed : false,        
    },{
        $set : {
            completed : true
        }

    }).then((result) => {
            console.log(result.modifiedCount);
        }).catch((error) =>{
            console.log(error);
        })
        db.collection('products').deleteMany({
            description : 'black box',
        }).then((result) => {
            console.log(result);
        }).catch((error) =>{
            console.log(error);
        })    
    })


     
    // db.collection('Users').insertOne({
    //     name : 'zahra',
    //     role : 'great mother i ever seen'
    // })
//     db.collection('products').insertMany([
//     {
//         description : 'black box',
//         completed : false
//     },
//     {
//         description : 'white car',
//         completed : true
//     },
//     {
//         description : 'grey yacht',
//         completed : true
//     }
// ], (error, result) => {

//     if(error)
//         return console.log('unable to insert document!');
//     console.log(result.ops);    
// })
// })