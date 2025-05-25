
function add(a, b) {
  return a + b;
}

const args = process.argv.slice(2);
const a = parseInt(args[0]);
const b = parseInt(args[1]);

console.log(isNaN(a) || isNaN(b) ? "NaN" : add(a, b));
