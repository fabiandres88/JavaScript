//Async Await
//Examples

const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (treu)
            ? setTimeout(() => resolve('Do something async'), 4000)
            : reject(new Error('Tet error'))
    });
}

const callDoSomethingAsync = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
callDoSomethingAsync();
console.log('After');

//Using try catch
const callDoSomethingAsyncTryCatch = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
callDoSomethingAsyncTryCatch();
console.log('After');