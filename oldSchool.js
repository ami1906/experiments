

function Employee() {

    // private fields
    let firstName, lastName;

    // public methods
    this.getFullName = function() {
        return `${getFirstName()} ${getLastName()}`;
    }

    this.setFirstName = function(name) {
        firstName = name;
    }

    this.setLastName = function(name) {
        lastName = name;
    }

    // private methods
    var getFirstName = function() {
        return firstName;
    }

    var getLastName = function() {
        return lastName;
    }
}

let emp = new Employee();
emp.setFirstName("Amarnath");
emp.setLastName("Krishnan");
console.log(emp.firstName); // undefined
console.log(emp.getLastName()); // Type Error - emp.getLastName is not a function
console.log(emp.getFullName());
