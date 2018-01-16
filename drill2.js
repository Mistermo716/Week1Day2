function repeat(fn, num) {
    for (let i = 0; i < num; i++) {
        fn();
    }
}

function hello() {
    {
        console.log("Hello World");
    }
}

function goodbye() {
    {
        console.log("Goodbye World");
    }
}

repeat(hello,5);
repeat(goodbye,5);
