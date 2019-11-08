class Employee {

    // private fields
    #firstName; 
    #lastName;

    // public methods
    getFullName() {
        return `${this.#getFirstName()} ${this.#getLastName()}`;
    }

    setFirstName(name) {
        this.#firstName = name;
    }

    setLastName(name) {
        this.#lastName = name;
    }

    // private methods
    #getFirstName = function() {
        return this.#firstName;
    }

    #getLastName = function() {
        return this.#lastName;
    }
}

let emp = new Employee();
emp.setFirstName("Amarnath");
emp.setLastName("Krishnan");
console.log(emp.#firstName);  // Syntax Error - Unexpected character '#'
console.log(emp.#getLastName());  // Syntax Error - Unexpected character '#'
console.log(emp.getFullName());