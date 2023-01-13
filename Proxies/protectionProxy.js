// protection proxy is the kind of proxy you add in order to control access to a particular resource
//  first you have a resource in a kind of unguarded state and then you make a wrapper that tries to mimic
//      as much of the object interface as possible so that it can be hot-swapped in, but it also performs 
//      additional checks/protections

class Car{
    drive() {
        console.log('Car is being driven')
    }
}

class CarProxy{
    constructor(driver) {
        this.driver = driver;
        this._car = new Car();
    }

    drive() {
        if (this.driver.age >= 16) {
            this._car.drive()
        }
        else {
            console.log(`Driver too young`)
        }
    }
}

class Driver{
    constructor(age) {
        this.age = age;
    }
}

// let car = new Car()
// car.drive()

let car2 = new CarProxy(new Driver(16))
car2.drive()