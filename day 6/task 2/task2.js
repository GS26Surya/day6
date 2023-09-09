class circle {
    constructor(radius , color ) {
        this._radius = radius;
        this._color = color;
    }

    setradius(radius) {
        if (radius) {
            this._radius = radius;
        } else {
            this._radius = 1;
        }
    }

    getradius() {
        return this._radius;
    }

    setcolor(color) {
        if (color) {
            this._color = color;
        } else {
            this._color = "Red";
        }
    }

    getcolor() {
        return this._color;
    }

    string() {
        return `circle[radius=${this._radius}, color=${this._color}]`;
    }

    getarea() {
        return Math.PI * this._radius * this._radius;
    }

    getcircumference() {
        return 2 * Math.PI * this._radius;
    }
}

const circle1 = new circle();
console.log(circle1);
const radius1 = circle1.getarea();
const circumference1 = circle1.getcircumference();
console.log(`${radius1}  

${circumference1}`);

const circle2 = new circle(8);
const radius2 = circle2.getarea();
const circumference2 = circle2.getcircumference();
console.log(`${radius2}

${circumference2}`);

 