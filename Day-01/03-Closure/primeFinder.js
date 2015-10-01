function getPrimeFinder(){
    var cache = {};
    function isPrime(n){
        console.log("processing ", n);
        if (n <=3) return true;
        for(var i=2; i <= (n/2); i++)
            if (n % i === 0) return false;
        return true;
    }
    return function(n){
        var key = n;
        if (typeof cache[key] === "undefined")
            cache[key] = isPrime(n);
        return cache[key];
    }
}


function getAdder(){
    var cache = {};
    function add(x,y){
        console.log("processing ", x , " and ", y);
        return x + y;
    }
    return function(x, y){
        var key = x + '-' + y;
        if (typeof cache[key] === "undefined")
            cache[key] = add(x,y);
        return cache[key];
    }
}


function memoize(fn){
    var cache = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === "undefined")
            cache[key] = fn.apply(this,arguments);
        return cache[key];
    }
}

