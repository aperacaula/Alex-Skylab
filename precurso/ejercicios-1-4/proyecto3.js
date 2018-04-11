function Bingo(){
	var name=prompt('Hello, what is your name?');
	var carton=[3,44,56,35,21];
	console.log('Hola '+name+' tu cartón és el siguiente: '+carton)

	function RandomNumber(lista){//saca un número random que no esté en la lista dada
		var numRan= Math.floor((Math.random()*90)+1);
		if (lista.indexOf(numRan)===-1){
			return numRan;
		}else{
			return RandomNumber(lista)//creo que aquí se podría usar recursividad, se llama a ella misma
		}
	}

	function NewTurn(carton, randomNum){ //Función que determina si el cartón tiene el número que ha salido y lo modifica, además, retorna true o false
		var tieneElNum=false; //variable que me dirá si el número está en el cartón
		for (i=0;i<carton.length;i++){
			if (carton[i]===randomNum){
				carton[i]='X'
				console.log('Ha tocado el '+randomNum+' y por lo tanto nos queda '+carton)
				tieneElNum=true;
				return tieneElNum;
			}
		}
		return tieneElNum;
	}


	function AskNewTurn(){ //pregunta si quieres un turno nuevo
		return confirm('Turno nuevo! Sacamos una bola?')
	}

	function CheckIfBingo(carton){ //mira si el cartón se ha completado
		var test= true;
		for (i=0;i<carton.length;i++){
			if (carton[i]!=='X'){
				test= false;
				return test
			}
		}
		return test
	}

	var userWantsNewTurn= AskNewTurn(); //variable que guarda la información del confirm()
	var randomUsed=new Array(); //acumulará los números que ya han salido
	while (userWantsNewTurn && !CheckIfBingo(carton)){
		var numRan=RandomNumber(randomUsed);//saco numero
		randomUsed.push(numRan);//añado el numero que ha salido a la lista de bolas usadas
		console.log('Ha salido el '+numRan)
		var toca=NewTurn(carton, numRan);//miro si ha tocado en el carton
		if (!toca){ //si no toca, lástima
			console.log('Lástima')
		}
		userWantsNewTurn= AskNewTurn() //pregunto por siguiente turno
	}

	if (!userWantsNewTurn){
		return 'Ciao!'
	}

	if (CheckIfBingo(carton)){
		return 'BINGO!'
	}

}