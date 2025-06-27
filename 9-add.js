let a=Number(process.argv[2]);
let b=Number(process.argv[3]);
if (isNaN(a) || isNaN(b)) {
    console.log("Missing number of occurrences");
}
function add(a, b) {
    return a + b;
}
console.log(add(a, b));