function print (arg1 ,arg2){
    console.log(arg1 + " is " + arg2);
}
print((process.argv[2]), Number(process.argv[2]));
