*[Prototypes](https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)


    //property that lives on all objects- comes from the constructor- where all the shared methods live. gets inherited by every object from a structure and creates a chain based on inheritance. If you create a character, when you try to call... javascript will look into the object to see if the ... exists, if it does it will call it, if it doesn't it will look into the prototype and if its there it will call it. 
    **
    Prototypes ** are JavaScript’ s built - in system that allows objects to inherit features from other objects.

    // Array.prototype.forEach()
    const myArray = [2, 4, 6, 8];

    myArray.forEach((num) => console.log(num));

    // String.prototype.toLowerCase()
    const person = {
        name: 'Eric',
        age: 28,
        occupation: 'Full-Stack Web Developer',
    };

    console.log(person.occupation.toLowerCase());

    // Prototype methods on constructor function
    function Movie(title, releaseYear) {
        this.title = title;
        this.releaseYear = releaseYear;
    }

    const superman = new Movie('Superman', 1978);

    Movie.prototype.logInfo = function () {
        console.log(`${this.title} was released in ${this.releaseYear}`);
    };

    superman.logInfo();


    //instead of having thier mehtods in the constructor we move them to the prototype