function memoize(func) {
    const data = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (!data.has(key)) {
            data.set(key, func.apply(null, args));
        } 
        return data.get(key);
    };
};

const fib = num => {
    process.stdout.write(".");
    if (num < 2) {
        return num;
    } else {
        return fib(num - 1) + fib(num - 1);
    }
};

const memoizedFib = memoize(fib);

console.log("memoizedFib of 6");
console.log(memoizedFib(6));
console.log("again");
console.log(memoizedFib(6));
