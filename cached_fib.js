const fibonator = () => {
    const cache = new Map();
    const fib = num => {
        if (num < 2) {
            return num;
        } else {
            if (!cache.has(num)) {
                process.stdout.write('.')
                cache.set(num, fib(num - 1) + fib(num - 2));
            }
            return cache.get(num);
        }
    };
    return fib;
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
const madfib = fibonator();
console.log(madfib(8));
