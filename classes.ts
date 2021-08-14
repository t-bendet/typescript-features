class Vehicle {
  // color: string;;
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}
  drive(): void {
    console.log("vrom vrom");
  }
  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("blue");
vehicle.drive();
vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("vrom vrom overwrite the old method");
  }
}

const car = new Car(4, "green");
console.log(car);
