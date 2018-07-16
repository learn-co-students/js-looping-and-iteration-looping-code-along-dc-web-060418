// Code your solutions in this file
function printBadges(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
    }
    return arr
}

function tailsNeverFails() {
    let heads = false;
    let count = 0;
    while (!heads) {
        Math.random() >= 0.5 ? count++ : heads = true;
    }
    return `You got ${count} tails in a row!`
}