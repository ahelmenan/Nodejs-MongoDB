console.log(`Starting app`);

setTimeout(() => {
    console.log(`inside callback`);    
},3000);

setTimeout(() => {
    console.log(`second time out`);    
},0);
console.log(`Finishing app`);
