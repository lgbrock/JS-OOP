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

//Constructor Function
function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 }

    this.computeOptimumLocation = function (factor) {

    }

    this.draw = function () {
        this.computeOptimumLocation(0.1)

        console.log('draw')
    }
}

const circle = new Circle(10)

circle.draw()





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