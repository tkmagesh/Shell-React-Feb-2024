(function(){
    function addSync(x,y){
        return x + y;
    }
    function addSyncClient(x,y){
        const result = addSync(x,y)
        console.log('result : ', result)
    }
    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y){
        console.log('   [@addAsync] operation started')
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(() => {
                const result = x + y;
                resolveFn(result);
                console.log('   [@addAsync] operation completed')
            }, 5000);
        })
        return p;
    }

    window['addAsync']= addAsync;

   /* 
    function addAsyncClient(x,y){
        const p = addAsync(x,y)
        p.then(function(result){
            console.log('result :', result)
        })
    } 
    */

    async function addAsyncClient(x,y){
        const result = await addAsync(x,y)
        console.log('result :', result)
    }
    window['addAsyncClient'] = addAsyncClient;

    async function processAsync(x,y){
        const result = await addAsync(x,y)
        const finalResult = result * 2
        return finalResult
    }

    window['processAsync'] = processAsync;
})()
