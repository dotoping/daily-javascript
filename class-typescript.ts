// class in TypeScript
class Employee {
    fullName: string;
    age: number;
    jobTitle: string;
    hourlyRate: number;
    workingHoursPerWeek: number;
    taxRate: number;
    printEmployeeDetails = (): void => {
        console.log(
            `${this.fullName} has job as a(an) ${this.jobTitle} and get paid $${(this.hourlyRate * this.workingHoursPerWeek) * ((100 - this.taxRate) / 100)} per week.`
        );
    }
}

let employee1 = new Employee();
employee1.fullName = 'Daniel K';
employee1.age = 33;
employee1.jobTitle = 'Software Developer';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 38;
employee1.taxRate = 25;
employee1.printEmployeeDetails();