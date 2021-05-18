const getSum = function ( num )
{
    return num + 1;
};

// Fulfill these acceptance criteria 
console.info( getSum.call( this, 3 ) === 4 ); //true
console.info( getSum.call( this, 5 ) === 6 ); //true

// create an object with the values
let y = {
    a: 1,
    b: 2
};
let newArray = [];

for ( const key in y )
{
    if ( y.hasOwnProperty.call( y, key ) )
    {
        const element = y[ key ];
        newArray.push( ( element ) );
    }
}
console.log( newArray ); // [ 1, 2 ]

// reversed string
let x = "hi";
let newX = x.split( '' ).reverse( ',' ).join( "" );
console.log( newX ); // "ih"

// should return the two values throug the functions
const obj = {
    a: 1,
    b: 2,
    getA ()
    {
        console.log( this.a );
        return this;
    },
    getB ()
    {
        console.log( this.b );
        return this;
    }
}
obj.getA().getB();

// set a method to arrays
Array.prototype.print = function ()
{
    console.log( this.join( "," ) );
}
let a = [ 1, 2 ];
a.print(); // 1,2