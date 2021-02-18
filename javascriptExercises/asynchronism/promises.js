//Promises
//exercises

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('It was resolved.')
        } else {
            reject('It was rejected.')
        }
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('It is ok.')
            }, 5000);
        } else {
            const error = new Error('Whoopoos!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then((response) => console.log(response))
    .catch(error => console.error(error));

//Promise All

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(error => {
        console.error(error);
    })