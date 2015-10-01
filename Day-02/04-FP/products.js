var products = [
    {id : 4, name : "Pen", cost : 20, units : 50, category : 2},
    {id : 2, name : "Hen", cost : 80, units : 40, category : 1},
    {id : 6, name : "Ten", cost : 10, units : 10, category : 1},
    {id : 3, name : "Den", cost : 50, units : 50, category : 2},
    {id : 9, name : "Zen", cost : 90, units : 10, category : 1}
];

/*
sort - done
filter - filter any list by any criteria
all
any
sum
min
max
groupBy
*/

function print(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}



print("Default list", function(){
    console.table(products);
});

print("Sorting", function(){
    print("Default sort [ products by id ]", function(){
        function sort(products){
            for(var i=0; i<products.length-1; i++)
                for(var j=i+1; j<products.length; j++){
                    var left = products[i],
                        right = products[j];
                    if (left.id > right.id){
                        var temp = left;
                        products[i] = products[j];
                        products[j] = temp;
                    }
                }
        }
        sort(products);
        console.table(products);
    });
    print("Generic sort [ any list by any attribute ]", function(){
        function sort(list, attrName){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++){
                    var left = list[i],
                        right = list[j];
                    if (left[attrName] > right[attrName]){
                        var temp = left;
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
        }
        print("Products by cost", function(){
            sort(products, "cost");
            console.table(products);
        });
        print("Products by units", function(){
            sort(products, "units");
            console.table(products);
        });

    });
    print("Generic sort [ any list by any comparison ]", function(){
        function sort(list, compareFn){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++){
                    var left = list[i],
                        right = list[j];
                    if (compareFn(left, right) > 0 ){
                        var temp = left;
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
        }
        print("Products by value [units * cost]", function(){
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.units * p1.cost,
                    p2Value = p2.units * p2.cost;
                if (p1Value < p2Value) return -1;
                if (p1Value > p2Value) return 1;
                return 0;
            }

            sort(products, productComparerByValue);
            console.table(products);
        });

    });
});

print("Filtering", function(){
    print("All category 1 products", function(){
        var filterCategory1Products = function(){
            var result = [];
            for(var i=0; i<products.length; i++)
                if (products[i].category === 1)
                    result.push(products[i]);
            return result;
        }
        var allCategory1Products = filterCategory1Products();
        console.table(allCategory1Products);
    });
    print("All costly products [cost > 50]", function(){
        var filterCostlyProducts = function(){
            var result = [];
            for(var i=0; i<products.length; i++)
                if (products[i].cost > 50)
                    result.push(products[i]);
            return result;
        }
        var allCostlyProducts = filterCostlyProducts();
        console.table(allCostlyProducts);
    });
    print("Filter [any list by any criteria", function(){
        function filter(list, criteriaFn){
            var result = [];
            for(var i=0; i<list.length; i++)
                if (criteriaFn(list[i]))
                    result.push(list[i]);
            return result;
        }
        var costlyProductCriteria = function(product){
            return product.cost > 50;
        }
        print("Costly Products", function(){
            var allCostlyProducts = filter(products, costlyProductCriteria);
            console.table(allCostlyProducts);
        });
        var category1ProductCriteria = function(product){
            return product.category === 1;
        };
        print("Category 1 products", function(){
            var allCategory1Products = filter(products, category1ProductCriteria);;
            console.table(allCategory1Products);
        });
    });
});


