//Project1
function calculadora(n1,n2){
	if(arguments.length===1){
		console.log (Math.sqrt(n1));
	}else if (isNaN(n1) || isNaN(n2)){
		console.log("This can't be done");
	}else{
		if (Number.isInteger(n1/n2)){
			var arr= [n1.toString()+'+'+n2.toString()+'='+(n1+n2).toString(),n1.toString()+'-'+n2.toString()+'='+(n1-n2).toString(),n1.toString()+'*'+n2.toString()+'='+(n1*n2).toString(),n1.toString()+'/'+n2.toString()+'='+(n1/n2).toString()];
		}else{
			var arr=[n1.toString()+'+'+n2.toString()+'='+(n1+n2).toString(),n1.toString()+'-'+n2.toString()+'='+(n1-n2).toString(),n1.toString()+'*'+n2.toString()+'='+(n1*n2).toString(),n1.toString()+'/'+n2.toString()+'='+((n1/n2).toFixed(3)).toString()];
		}
		console.log(arr);
	}
}
