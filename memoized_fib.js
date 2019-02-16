function memoize(func) {
    const data = new Map();
    return (key) => {
        if (!data.has(key)) {
            data.set(key, func(key));
        } 
        return data.get(key);
    };
};

const fib = memoize(num => {
    process.stdout.write(".");
    if (num < 2) {
        return num;
    } else {
        return fib(num - 1) + fib(num - 2);
    }
});

const rawFib = num => {
    process.stdout.write('.');
    if (num < 2) {
        return num;
    } else {
        return rawFib(num - 1) + rawFib(num - 2);
    }
};

console.log("Memoized:")
console.log(fib(26));
console.log(fib(26));

console.log("\nWithout memoization:");
console.log(rawFib(11));
console.log(rawFib(11));
