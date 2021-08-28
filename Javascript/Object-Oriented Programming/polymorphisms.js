*[Polymorphism](https: //en.wikipedia.org/wiki/Polymorphism_(computer_science))

    // A method that can do many things based on parameters that are passed into it (method overloading)
    // could use if-else or switch- idea is to take in argument and performs tasks based on the value of that argument


    //EXAMPLE 
    const OverloadDemo = function () {
        this.area = function (x, y) { //x and y are parameters
            console.log('x = ', x); //y not provided-assumes its a square
            if (!y) {
                console.log('y is not provided');
                return `\nThe area of the square is ${Math.pow(x, 2)} sq units`;
            }
            console.log('y = ', y);
            return `\nThe area of the rectangle is ${x * y} sq units`;
        };
    };

    const rectangle = new OverloadDemo(); console.log('rectangle.area(5, 7)', rectangle.area(5, 7)); console.log('rectangle.area(5)', rectangle.area(5));


    //EXAMPLE2 
    // Helper function to evaluate if a number is within a given range
    const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

    function Student(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;

        // Method that will simulate method overloading in JavaScript
        this.displayGrade = function (grade) {
            const input = grade;
            if (!input) {
                throw new Error('no grade provided');
            }
            let response;
            // Return a letter grade if a number grade was passed
            if (typeof input === 'number') {
                if (inRange(input, 90, 100)) {
                    response = 'A';
                }
                if (inRange(input, 80, 89)) {
                    response = 'B';
                }
                if (inRange(input, 70, 79)) {
                    response = 'C';
                }
                if (inRange(input, 60, 69)) {
                    response = 'D';
                }
                if (inRange(input, < 60)) {
                    response = 'F';
                }

                return response;
            }
            // Return a range if a letter grade was passed
            // Ex. 'A' => '90 - 100'
            if (typeof input === 'string') {
                switch (input) {
                    case 'A':
                        response = '90 - 100';
                        break;
                    case 'B':
                        response = '80 - 89';
                        break;
                    case 'C':
                        response = '70 - 79';
                        break;
                    case 'D':
                        response = '60 - 69';
                        break;
                    case 'F':
                        response = '0 -59';
                        break;
                    default:
                        response = '0
                        break '
                }
            }
        };
    }

    const John = new Student('John', 'Appleseed', '30'); console.log('John.displayGrade():', John.displayGrade(95)); console.log('John.displayGrade():', John.displayGrade('B'));