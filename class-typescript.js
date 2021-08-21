// class in TypeScript
var Employee = /** @class */ (function () {
    // private _fullName: string;
    // age: number;
    // jobTitle: string;
    // hourlyRate: number;
    // workingHoursPerWeek: number;
    // taxRate: number;
    function Employee(_fullName, _age, _jobTitle, hourlyRate, workingHoursPerWeek, taxRate) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.taxRate = taxRate;
        this.printEmployeeDetails = function () {
            console.log(_this.fullName + " is a(an) " + _this.jobTitle + " and get paid $" + (_this.hourlyRate * _this.workingHoursPerWeek) * ((100 - _this.taxRate) / 100) + " per week.");
        };
    }
    ;
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('Daniel', 33, 'Junior Developer', 40, 35, 25);
employee1.fullName = 'Hogwart';
employee1.printEmployeeDetails();
