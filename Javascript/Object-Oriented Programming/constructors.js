* [constructor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

  * [function() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)

** Constructors ** are special functions that help us create objects of similar types.

OK to use arrow method for constructors

//EXAMPLE: 
// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = () => {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
const dogs = new Animal(true, 'Woof!');
console.log(dogs) //gives us Animal object {raining: true, noise: "woof", makeNoise: [Function (anonymous)]}
const cats = new Animal(false, 'Meow!');

// Calling dogs and cats makeNoise methods
dogs.makeNoise(); //will only return dog noise bc is raining for cat is false
cats.makeNoise();

// If we want, we can change an object's properties after they're created
cats.raining = true;
cats.makeNoise();

const massHysteria = (dogs, cats) => {
  if (dogs.raining === true && cats.raining === true) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
};

massHysteria(dogs, cats);



//EXAMPLE2:
function Person(role, age, location) {
  this.role = role
  this.age = age
  this.location = location
  this.greet = () => console.log ('Yo ${this.name}, I am ${this.role}')
}

const ta = new Person('TA', 'Ryan', 'The Moon')
ta.greet()

const student = new Person('Student', 'Nikki', 'in class')
student.greet()
