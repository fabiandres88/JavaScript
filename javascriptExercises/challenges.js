// IsPalindrome

const ispalindrome = ( word ) =>
{
    let wordReverse = word.split( '' ).reverse().toString();
    word = word.split( '' ).toString();
    if ( word == wordReverse )
    {
        console.log( "This word is palindrome" );
    } else
    {
        console.log( "This word is not palindrome" );
    }

};

ispalindrome( "asasasa" );
ispalindrome( "ojo" );
ispalindrome( "casa" );

// program to count down numbers to 1
function countDown ( number )
{

    // display the number
    console.log( number );

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if ( newNumber > 0 )
    {
        countDown( newNumber );
    }
}

countDown( 100 );

// print numbers from 0 to 100

const count = ( numb ) =>
{
    console.log( numb );
    const next = numb + 1;
    if ( next <= 100 )
    {
        count( next );
    }
}

count( 0 );

// build my factorial
const fctrl = ( n ) =>
{
    if ( n === 0 )
    {
        return 1;
    } else if ( n < 0 )
    {
        return "Number not allowed";
    } else
    {
        return n * fctrl( n - 1 );
    }
}

let one = fctrl( 0 );

// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
const nTerms = 5;
let res = fibonacci(4);
console.log(res);

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}