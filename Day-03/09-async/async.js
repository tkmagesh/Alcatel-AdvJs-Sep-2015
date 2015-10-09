function add(x,y){
    console.log("[producer] processing ", x , " and ", y);
    var result = x + y;
    console.log("[producer] returning result");
    return result;
}

function addClient(x,y){
    console.log("[consumer] triggering add");
    var result = add(x,y);
    console.log("[consumer] result = ", result);
}

/* Async */
function addAsync(x,y, onResult){
    console.log("[producer] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[producer] returning result");
        onResult(result);
    },3000);
}

function addAsyncClient(x,y){
    console.log("[consumer] triggering add");
    addAsync(x,y, function(result){
        console.log("[consumer] result = ", result);
    });
}
