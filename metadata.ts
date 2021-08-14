import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi there", plane);
// const note = Reflect.getMetadata("note", plane);
// console.log(note);

// Reflect.defineMetadata("note", "hi there", plane, "color");
// const note = Reflect.getMetadata("note", plane, "color");
// console.log(note);
@printMetadata
class plane {
  color: string = "red";
  @markFunction("HI THERE")
  fly(): void {
    console.log("vrr");
  }
}
function markFunction(secretInfo: string) {
  return function (target: plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
