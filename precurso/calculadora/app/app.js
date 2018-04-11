function calculadora(){
	var n1=Number(document.getElementById('n1').value)
	var n2= Number(document.getElementById('n2').value)
	if(n2===undefined){
		console.log (Math.sqrt(n1));
		document.getElementById('results').innerHTML=Math.sqrt(n1)
	}else if (isNaN(n1) || isNaN(n2)){
		console.log("This can't be done");
		document.getElementById('results').innerHTML="This can't be done"
	}else{
		if (Number.isInteger(n1/n2)){
			var arr= [n1.toString()+' + '+n2.toString()+' = '+(n1+n2).toString(),n1.toString()+' - '+n2.toString()+' = '+(n1-n2).toString(),n1.toString()+' x '+n2.toString()+' = '+(n1*n2).toString(),n1.toString()+' / '+n2.toString()+' = '+(n1/n2).toString()];
		}else if (n1===0 && n2===0){
			var arr= [n1.toString()+' + '+n2.toString()+' = '+(n1+n2).toString(),n1.toString()+' - '+n2.toString()+' = '+(n1-n2).toString(),n1.toString()+' x '+n2.toString()+' = '+(n1*n2).toString(),n1.toString()+' / '+n2.toString()+' = '+0];

		}else{
			var arr= [n1.toString()+' + '+n2.toString()+' = '+(n1+n2).toString(),n1.toString()+' - '+n2.toString()+' = '+(n1-n2).toString(),n1.toString()+' x '+n2.toString()+' = '+(n1*n2).toString(),n1.toString()+' / '+n2.toString()+' = '+(n1/n2).toFixed(3).toString()];
		}
		console.log(arr);
		document.getElementById('results').innerHTML= '<li>'+arr[0]+'</li>'+'<li>'+arr[1]+'</li>'+'<li>'+arr[2]+'</li>'+'<li>'+arr[3]+'</li>'

		
	}
}



