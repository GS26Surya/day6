class Uber {
  constructor(distance, duration) {
    this.distance = distance;
    this.duration = duration;
    this.baseFare = 50;
    this.perMinuteRate = 5;
    this.perMileRate = 25;
  }

  calculatePrice() {
    let totalFare = this.baseFare;
    totalFare += this.duration * this.perMinuteRate;
    totalFare += this.distance * this.perMileRate;
    return totalFare.toFixed(2);
  }
}



const demo1 = new Uber(12,30)
console.log(`The estimated Uber price is INR ${demo1.calculatePrice()}`);

const demo2 = new Uber(5,10)
console.log(`The estimated Uber price is INR ${demo2.calculatePrice()}`);

const demo3 = new Uber(1,2)
console.log(`The estimated Uber price is INR ${demo3.calculatePrice()}`);