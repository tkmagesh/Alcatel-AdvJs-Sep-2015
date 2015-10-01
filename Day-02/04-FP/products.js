var products = [
    {id : 4, name : "Pen", cost : 20, units : 50, category : 2},
    {id : 2, name : "Hen", cost : 80, units : 40, category : 1},
    {id : 6, name : "Ten", cost : 10, units : 10, category : 1},
    {id : 3, name : "Den", cost : 50, units : 50, category : 2},
    {id : 9, name : "Zen", cost : 90, units : 10, category : 1}
];

/*
sort
filter
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
        function sort(){
            //fill in the blanks
        }
        sort(products);
        console.table(products);
    });
});


