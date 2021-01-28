function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('stopwatch has started')

        running = true;

        startTime = new Date()
    };
    this.stop = function () {
        if (!running)
            throw new Error('stopwatch has not started')

        running = false;

        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0
    };
    Object.defineProperty(this, 'duration', {

    });
}







//contructor property - every object has a constructor property and that references the function that was used to create that object

//In JS, functions or objects

//Factory Function
/*
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw')
        }
    }
}
const circle = createCircle(1)
circle.draw()
*/

//getter is a function that reads a function
/*
//Constructor Function
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
        return defaultLocation
    }
    this.draw = function () {
        //defaultLocation
        //this.radius
        console.log('draw')
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('invalid location.')
            defaultLocation = value
        }
    })
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();

*/



//abstraction - hide the details or complexity

/*
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key])
}

const keys = Object.keys(circle)
console.log(keys)

if ('radius' in circle)
    console.log('circle has a radius')

*/





/*
circle.location = { x: 1 }

const propertyName = 'center location';
circle[propertytName] = { x: 1 };

delete circle['location'];
*/




//primitive - are copied by their value
//objects - are copied by their reference
/*
let obj = { value: 10 }

function increase(obj) {
    obj.value++;
}

increase(obj)
console.log(obj)
*/