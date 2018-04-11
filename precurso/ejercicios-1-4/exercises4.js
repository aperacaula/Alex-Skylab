
//a
function showNums1(){
	var numeros=[1,2,3,4,5,6,7,8,9]
	var doble=numeros.map(x=>x*2);
	for(i=0;i<numeros.length-1;i++){
		console.log('La '+(i+1)+'a pareja es '+doble.slice(i,i+2));
	}
}

function showNums(){
	var numeros=[1,2,3,4,5,6,7,8,9];
	for(i=0;i<numeros.length-1;i++){
		var pair=[numeros[i]*2,numeros[i+1]*2];
		console.log('La '+(i+1)+'a pareja es '+pair);
	}
}

//a1
function showNums1(){//DA ERROR
	var numeros=arguments;
	var doble=numeros.map(x=>x*2);
	for(i=0;i<numeros.length-1;i++){
		console.log('La '+(i+1)+'a pareja es '+doble.slice(i,i+2));
	}
}

function showNums(){
	var numeros=arguments;
	for(i=0;i<numeros.length-1;i++){
		var pair=[numeros[i]*2,numeros[i+1]*2];
		console.log('La '+(i+1)+'a pareja es '+pair);
	}
}

//a2
function showNums(){
	var numeros=arguments;
	for(i=0;i<numeros.length-2;i++){
		console.log('El numero escogido es: '+numeros[numeros.length-1]);
		var pair=[numeros[i]*numeros[numeros.length-1],numeros[i+1]*numeros[numeros.length-1]];
		console.log('La '+(i+1)+'a pareja es '+pair);
	}

}

//a3
function showNums(){
	var numeros=arguments;
	console.log('El numero escogido es: '+numeros[numeros.length-2]);
	console.log('Se quieren mostrar las '+numeros[numeros.length-1]+' primeras parejas')
	for(i=0;i<numeros[numeros.length-1];i++){
		var pair=[numeros[i]*numeros[numeros.length-2],numeros[i+1]*numeros[numeros.length-2]];
		console.log('La '+(i+1)+'a pareja es '+pair);
	}

}

//b
function fiboPira(){
	var n1=0;
	var serie=[n1]
	console.log(serie)
	var n2=1;
	serie.push(n2);
	console.log(serie)
	if (arguments.length===0){
		while (n2<100){
			var x= n1+n2;
			serie.push(x);
			n1=n2;
			n2=x
		}
	}else{
		while (serie.length<=arguments[0]){
			var x= n1+n2;
			serie.push(x);
			console.log(serie)
			n1=n2;
			n2=x
		}
		while (serie.length>0){
			serie.pop()
			console.log(serie)
		}
	}
}

function fibo(){
	var n1=0;
	var n2=1;
	var serie=[n1,n2]
	if (arguments.length===0){
		while (n2<100){
			var x= n1+n2;
			serie.push(x);
			n1=n2;
			n2=x
		}
	}else{
		while (serie.length<=arguments[0]){
			var x= n1+n2;
			serie.push(x);
			n1=n2;
			n2=x
		}
	}
	return serie+' Muestra hasta posición '+arguments[0]
}

//c
function codeScript(code){
	var s=code.toString();
	var arr=s.split('');
	arr.reverse()
	var x=arr.pop();
	arr.reverse();
	arr.push(x);
	s=arr.join('');
	return Number(s)
}

function codeScript(){
	var conc=[]
	for (i=0;i<arguments.length;i++){
		var code=arguments[i];
		var s=code.toString();
		var arr=s.split('');
		arr.reverse()
		var x=arr.pop();
		arr.reverse();
		arr.push(x);
		s=arr.join('');
		conc.push(Number(s))
	}
	return conc
}

function codeScript(){
	var conc=[]
	for (i=0;i<arguments.length;i++){
		var code=arguments[i];
		var s=code.toString();
		var arr=s.split('');
		for (u=0;u<arr.length;u++){
			if (Number(arr[u])<5){
				arr[u]=(Number(arr[u])*2).toString()
		}
		arr.reverse()
		var x=arr.pop();
		arr.reverse();
		arr.push(x);
		s=arr.join('');
		conc.push(Number(s))
	}
	return conc
}


//d

function Romana(str){
	function Encrypt(str){
		var arr=str.split('');
		var firstHalf=[];
		var secHalf=[];
		for(i=0;i<arr.length;i++){
			if (i<arr.length/2){
				firstHalf.push(arr[i]);
			}else{
				secHalf.push(arr[i]);
			}
		}
		var arrCoded=[]
		for(i=0;i<firstHalf.length;i++){
			arrCoded.push(firstHalf[i]);
			arrCoded.push(secHalf[i]);
		}
		console.log ('For '+str+' the code is: '+arrCoded.join(''))
		return arrCoded.join('')
	}

	function decrypt(str){
		var arr=str.split('');
		var firstHalf=[];
		var secHalf=[];
		for(i=0;i<arr.length;i++){
			if (i%2===0){
				firstHalf.push(arr[i]);
			}else{
				secHalf.push(arr[i]);
			}
		}
		var arrDecoded=firstHalf.concat(secHalf)
		return (arrDecoded.join(''))
	}

	var encrypted=Encrypt(str);
	return decrypt(encrypted)
}

//e

function sayItWithWords(num){
	var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	if ((num.toString()).length===2){
		if (Number((num.toString())[0])===1){
			return teens[Number((num.toString())[1])]
		}else{
			return tens[Number((num.toString())[0])]+' '+units[Number((num.toString())[1])]
		}
	}else{
		return units[Number(num.toString())]
	}
}












