function isPolyndrom(str: string): boolean {
    return str === str.split('').reverse().join('');
}

function fibonachi(count: number): number[] {
    if (count < 1) {
        return [];
    }
    let result: number[] = [1];
    for (let i = 1; i < count; i++) {
        let prevTwoValue = result[i-2];
        let nextNumber = result[i-1] + (prevTwoValue !== undefined ? prevTwoValue : 0);
        if (nextNumber >= count) {
            break;
        }
        result[i] = nextNumber;
    }
    return result;
}

console.log(isPolyndrom('abccba'));
console.log(fibonachi(27));