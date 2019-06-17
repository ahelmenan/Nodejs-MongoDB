const doWorkPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve([4, 3, 1]);
    },2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result);
    
}).catch((error) => {
    console.log('Error!', error);    
})