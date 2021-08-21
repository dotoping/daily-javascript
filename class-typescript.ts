// class in TypeScript
class Employee {
    // private _fullName: string;
    // age: number;
    // jobTitle: string;
    // hourlyRate: number;
    // workingHoursPerWeek: number;
    // taxRate: number;

    constructor(
        private _fullName: string,
        private _age: number,
        private _jobTitle: string,
        public hourlyRate: number,
        public workingHoursPerWeek: number,
        public taxRate: number) { };

    get fullName() {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    printEmployeeDetails = (): void => {
        console.log(
            `${this.fullName} is a(an) ${this.jobTitle} and get paid $${(this.hourlyRate * this.workingHoursPerWeek) * ((100 - this.taxRate) / 100)} per week.`
        );
    }
}

let employee1 = new Employee('Daniel', 33, 'Junior Developer', 40, 35, 25);

employee1.fullName = 'Hogwart';
employee1.printEmployeeDetails();