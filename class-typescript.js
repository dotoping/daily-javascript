// class in TypeScript
var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log(_this.fullName + " has job as a(an) " + _this.jobTitle + " and get paid $" + (_this.hourlyRate * _this.workingHoursPerWeek) * ((100 - _this.taxRate) / 100) + " per week.");
        };
    }
    return Employee;
}());
var employee1 = new Employee();
employee1.fullName = 'Daniel K';
employee1.age = 33;
employee1.jobTitle = 'Software Developer';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 38;
employee1.taxRate = 25;
employee1.printEmployeeDetails();
