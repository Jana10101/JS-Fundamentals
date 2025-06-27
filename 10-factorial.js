
function factorial(n) {
if (isNaN(n)){
    console.log(1);
}else{
    let result=1;
    for (let i=n; i >=1 ; i--){
        result=result*i;
    }
    console.log(result);
}
}
factorial("5"); // 120
factorial(0); // 1