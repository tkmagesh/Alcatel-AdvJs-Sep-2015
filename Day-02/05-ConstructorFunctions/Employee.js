function Employee(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
/*
Create a SalaryCalculator class that can have the following attributes
    basic
    hra
    da
    tax
    salary

it should also have the following method
    calculate()

when the calculate method is triggered, the 'salary' attribute is pouplate with the value based on the following formula

    salary = (basic + hra + da) - tax%
*/

function SalaryCalculator(basic, hra, da, tax){
    this.basic = basic;
    this.hra = hra;
    this.da = da;
    this.tax = tax;
    //this.salary = 0;
    var _salary = 0;
    this.getSalary = function(){
        return _salary;
    };
    this.calculate = function(){
        var gross = this.basic + this.hra + this.da;
        this.salary = gross * ((100-this.tax)/100);
    };
}



