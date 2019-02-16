const cached_fib = num => {
    const cache = new Map();
    const fib = innerNum => {
        if (innerNum < 2) {
            return innerNum;
        } else {
            if (!cache.has(innerNum)) {
                process.stdout.write('.')
                cache.set(innerNum, fib(innerNum - 1) + fib(innerNum - 2));
            }
            return cache.get(innerNum);
        }
    };
    return fib(num);
}

const fib = num => {
    if (num < 2) {
        return num;
    }
    else {
        process.stdout.write('.');
        return fib(num - 1) + fib(num - 2);
    }
};

console.log('regular fib(8): ');
console.log(fib(8));

console.log('\ncached_fib(8): ');
console.log(cached_fib(8));
