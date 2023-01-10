class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    constructor(rho, theta) {
        this.x = rho * Math.cos(theta);
        this.y = rho * Math.sin(theta);
    }
}

console.log(Point)