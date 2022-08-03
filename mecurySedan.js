//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    checkService(){
        if(this.mileage > 3000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }
    start(){
        if(this.fuel > 0){
            console.log('Engine has started');
            return this.started = true
        } else {
            console.log('No fuel')
            return this.started = false;
        }
    }
    loadPassenger(num){
        if (this.passenger < this.maxPassengers){
            if ((num + this.passenger) <= this.maxPassengers){
                this.passenger = num;
                return this.passenger;
            } else{
                console.log(this.model + "" + this.make + "not enough space to take all passengers");

            }
         } else {
             console.log(thsi.model + "" + this.make + "is full");
         }
    }
}

//this shows how to call from this module...
let myCar = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "white", "50000");

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)
