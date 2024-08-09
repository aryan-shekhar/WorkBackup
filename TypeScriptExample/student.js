var student = /** @class */ (function () {
    function student(stdId, stdName, stdClass) {
        this.stdId = stdId;
        this.stdName = stdName;
        this.stdClass = stdClass;
    }
    student.prototype.display = function () {
        console.log(this.stdId);
        console.log(this.stdName);
        console.log(this.stdClass);
    };
    return student;
}());
var v1 = new student(1, "Aryan", "F");
v1.display();
var v2 = new student(2, "Ayush", "A");
v2.display();
