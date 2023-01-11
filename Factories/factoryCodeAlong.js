 CoordinateSystem = {
  cartesian: 0,
  polar: 1,
};
console.log(CoordinateSystem)
class Point {
  // constructor(a, b, cs=CoordinateSystem.cartesian) {
  //     switch(cs) {
  //         case CoordinateSystem.cartesian:
  //             this.x = a;
  //             this.y = b;
  //             break;
  //         case CoordinateSystem.polar:
  //             this.x = a * Math.cos(b);
  //             this.y = a * Math.sin(b);
  //     }
  // }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // constructor(rho, theta) {
  //     this.x = rho * Math.cos(theta);
  //     this.y = rho * Math.sin(theta);
  // }

  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
static get factory() {
    return new PointFactory();
}
}


class PointFactory {
    
   newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

let p1 = new Point(2, 3, CoordinateSystem.cartesian)
// let p1 = PointFactory.newCartesianPoint(4, 5)
console.log(p1)

let p2 = PointFactory.newPolarPoint(5, Math.PI/2)
console.log(p2)

let p3 = Point.factory.newCartesianPoint(10, 12)
console.log(p3)