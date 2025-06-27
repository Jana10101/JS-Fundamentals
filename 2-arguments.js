let arg=(process.argv[2]);
let arg1=(process.argv[3]);
switch (arg){
    case undefined: 
        console.log("No argument");
        break;
    case (arg1 && arg ):
        console.log("Arguments found");
        break;
    default:
        console.log("one Argument");
}