//Curso of Closures and Scope in JavaScript

//Private

const person = () => {
    var saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

const closure3 = person();
console.log(closure3.getName());
closure3.setName('Juancho');
console.log(closure3.getName());