console.log("Welcome, Shepherd");

function Pen() {
  this.count = 0;
  sheepList = [];
};

Pen.prototype.sheepCount = function() {
  return this.count;
};

Pen.prototype.addSheep = function(sheep) {
  this.count += 1;
  sheepList.push(sheep);
}

Pen.prototype.listSheep = function() {
  for(i = 0; i < sheepList.length; i++)
  {
    console.log(sheepList[i].sayName(), "says hello");
  }
  return sheepList;
}

function Sheep(name) {
  this.name = name;
}

Sheep.prototype.sayName = function() {
  return this.name;
}

var myPen = new Pen();
console.log("There are", myPen.sheepCount(), "sheep in the pen");

var mySheep = new Sheep("Fred");

console.log("Say hello to ", mySheep.sayName());

myPen.addSheep(mySheep);

console.log("There are", myPen.sheepCount(), "sheep in the pen");
myPen.listSheep()
