//console.log(process.argv);

var args = process.argv.slice(2);

if(args.length==0)
	args[0] = 0;

var result = args.reduce(function(previousValue, currentValue){
	return Number(previousValue) + Number(currentValue);
});

console.log(result);