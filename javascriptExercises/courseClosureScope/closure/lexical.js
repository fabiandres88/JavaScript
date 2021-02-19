//Curso of Closures and Scope in JavaScript

//Lexical

const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};

const closure = buildCount(2);
closure();
closure();
closure();
closure();

const closure2 = buildCount(20);
closure2();
closure2();
closure2();
closure2();