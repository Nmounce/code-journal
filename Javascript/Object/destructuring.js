//EXAMPLE

const arya = {
    name: 'Arya Stark',
    parents: ['Eddard Stark', 'Catelyn Stark'],
  };

  const jaime = {
    name: 'Jaime Lannister',
    parents: ['Tywin Lannister', 'Joanna Lannister'],
  };

  // In the past, if we wanted to pull off an object's property we'd have to do something like this:

  const aryaName = arya.name;
  const aryaParents = arya.parents;

  console.log(aryaName); // prints `"Arya Stark"`
  console.log(aryaParents); // prints `["Eddard Stark", "Catelyn Stark"]`


  // Now with ES6 object destructuring syntax, we can do this:

  const { name, parents } = arya;
  console.log(name); // prints `"Arya Stark"`
  console.log(parents); // prints `["Eddard Stark", "Catelyn Stark"]``


  // We can also rename our destructured properties like so:
           //we have to rename the property because "name" is taken above
  const { name: jaimeName } = jaime;
  console.log(jaimeName); // prints `"Jaime Lannister"`

  // We can also destructure parameters using the same feature. e.g. previously we might have done something like this:
  //instead of dot notation
  const logCharacter = (character) =>
    console.log(
      `${character.name}'s parents are: ${character.parents[0]} and ${character.parents[1]}.`
    );

  logCharacter(arya);

  // But now we can do this:

  const betterLogCharacter = ({ name, parents }) =>
    console.log(`${name}'s parents are: ${parents[0]} and ${parents[1]}.`);

  betterLogCharacter(jaime);



  //EXAMPLE2:
  // 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

const { name, type } = nodejs;

console.log(name); // <= Node.js
console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

const { framework1, framework2 } = js.tools.frameworks;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

const [markup, style, scripting] = languages;

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML
