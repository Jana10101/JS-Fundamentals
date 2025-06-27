const n = Number(process.argv[2]);

function factorial(n) {
    if (isNaN(n)|| n==0 ){
        console.log(1);
    }else{
        let result=n*factorial(n-1)
        return result;
        }
}
console.log(factorial(n)); 
