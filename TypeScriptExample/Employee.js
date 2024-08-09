var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log(this.empId);
        console.log(this.empName);
        console.log(this.empSal);
    };
    return Employee;
}());
var e1 = new Employee();
e1.empId = 123;
e1.empName = "aryan";
e1.empSal = 7000;
e1.display();
