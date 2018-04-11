function Bingo(){
	var name=prompt('Hello, what is your name?');

	function RandomNumber(lista){//saca un número random que no esté en la lista dada
		var numRan= Math.floor((Math.random()*90)+1);
		if (lista.indexOf(numRan)===-1){
			return numRan;
		}else{
			return RandomNumber(lista)//creo que aquí se podría usar recursividad, se llama a ella misma
		}
	}

	function crearCarton(){//creará un cartón, un array con 15 con números
		var carton=[];
		var listaRepe=[];
		for(i=0;i<15;i++){
			var numero=RandomNumber(listaRepe);
			carton.push(numero);
			listaRepe.push(numero);
		}
		return carton

	}
	
	var cartonGenerado=crearCarton()
	console.log('Hola '+name+' tu cartón és el siguiente: '+cartonGenerado)

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
	
	while (userWantsNewTurn && !CheckIfBingo(cartonGenerado)){
		var numRan=RandomNumber(randomUsed);//saco numero
		randomUsed.push(numRan);//añado el numero que ha salido a la lista de bolas usadas
		console.log('Ha salido el '+numRan)
		var toca=NewTurn(cartonGenerado, numRan);//miro si ha tocado en el carton
		if (!toca){ //si no toca, lástima
			console.log('Lástima')
		}
		userWantsNewTurn= AskNewTurn() //pregunto por siguiente turno
	}

	if (!userWantsNewTurn){
		return 'Ciao!'
	}

	if (CheckIfBingo(cartonGenerado)){
		return 'BINGO!'
	}

}

//{fila1:[3,44,56,35,21],fila2:[32,11,13,7,9],fila3:[16,81,71,33,19]};
	//console.log('Hola '+name+' tu cartón és e