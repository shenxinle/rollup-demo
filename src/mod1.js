export let add = (...args) => {
    return args.reduce((prev, cur, index, arr) => {
        return prev + cur;
    }, 0);
}

export let max = (...args) => {
    return Math.max(...args);
}

export let min = (...args) => {
    return Math.min(...args);
}

const mod1 = {add, max, min}

export default mod1