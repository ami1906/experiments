class Employee {

    constructor() {
        // private fields
        this._firstName; 
        this._lastName;
    }

    // public methods
    getFullName() {
        return `${this._getFirstName()} ${this._getLastName()}`;
    }

    setFirstName(name) {
        this._firstName = name;
    }

    setLastName(name) {
        this._lastName = name;
    }

    // private methods
    _getFirstName() {
        return this._firstName;
    }

    _getLastName() {
        return this._lastName;
    }
}

let emp = new Employee();
emp.setFirstName("Amarnath");
emp.setLastName("Krishnan");
console.log(emp._firstName);  // Amarnath
console.log(emp._getLastName());  // Krishnan
console.log(emp.getFullName());