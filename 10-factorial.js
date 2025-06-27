const n = Number(process.argv[2]);

function factorial(n) {
    if (isNaN(n)){
        return 1;
    }else if (n === 0) {
        return 1;
    }else{
        let result=n*factorial(n-1)
        return result;
        }
}
console.log(factorial(n)); 