function isPolyndrom(str: string): boolean {
    return str === str.split('').reverse().join('');
}

function fibonachi(count: number): number[] {
    if (count < 1) {
        return [];
    }
    let result: number[] = [1];
    for (let i = 1; i < count; i++) {
        result[i] = result[i-1] + (result[i-2] !== undefined ? result[i-2] : 0);
    }
    return result;
}

console.log(isPolyndrom('abccba'));
console.log(fibonachi(4));