var count = 0
var aciertos = 0
var fallos = 0

function questionGenerator(){
		var respuestas=['aztecas','bingo','cena','diablo','ernesto','frigo','gotham','hilo','IRA','joker','koala','lumbar','monitor','noruega','ornitorinco','payaso','quentin','rinoceronte','soprano','tortuga','unicornio','viscolastico','wanda','x-men','yugo','zaragoza'];
		var preguntas=['Con la A: Pueblo centroamericano previo a la conquista Española','Con la B: Juego de azar','Con la C: Desayuno, comida y...','Con la D: Lucifer','Con la E: La importancia de llamarse...','Con la F: Marca de helados','Con la G: Ciudad protegida por Batman','Con la H: Cosemos con él','Con la I: Grupo terrorista de Irlanda del Norte durante el s.XX','Con la J: Enemigo de Batman','Con la K: Marsupial australiano','Con la L: Parte inferior de la espalda','Con la M: A través de él, un ordenador nos comunica las cosas','Con la N: País nórdico','Con la O: Animal mamífero-ave','Con la P: Profesión de la risa','Con la Q: Nombre de Tarantino','Con la R: Animal africano en peligro de extinción','Con la S: Apellido de James Gandolfini en una serie que lleva su nombre','Con la T: Reptil con caparazón','Con la U: Caballo de fantasía','Con la V: Tipo de colchón','Con la W: Un pez llamado...','Con la X: Mutantes','Con la Y: Sirve para arar','Con la Z: Capital aragonesa'];
		var questionList=[];
		var abc='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var abecedario= abc.split('');
		for (i=0;i<abecedario.length;i++){
			var porCadaLetra={};
			porCadaLetra.letter=abecedario[i];
			porCadaLetra.answer=respuestas[i];
			porCadaLetra.question=preguntas[i];
			porCadaLetra.status=0;
			questionList.push(porCadaLetra)
		}
		return questionList
	}

function compruebaStatus(){
	var notComplete= false
	for (i=0;i<questions.length;i++){
		if (questions[i].status===0){
			notComplete= true
		}
	}
	return notComplete
}

var questions = questionGenerator();

function pasapalabra(){
	document.getElementById('jugar').setAttribute("style","display:none")
	document.getElementById('instrucciones').setAttribute("style","display:none")
	document.getElementById('panel').setAttribute("style","display:block")//muestra el panel de pregunta y respuesta 
	document.getElementById('answer').value = ''
	document.getElementById('aciertos').innerHTML = '✅' + aciertos
	document.getElementById('fallos').innerHTML = '❌' +  fallos
	if (count===questions.length){//reinicia el count
		count=0
	}
	notComplete=compruebaStatus();
	if (!notComplete){
		document.getElementById("gameOver").innerHTML= '👏GAME OVER👏'
	}
	if (questions[count].status===1){
		count++
		pasapalabra()
	}else{
		document.getElementById('pregunta').innerHTML = questions[count].question
	}
} 

function checkAnswer(){//comprueba si es cierta o falsa o pasapalabra i modifica el ínice
	var answer = document.getElementById('answer').value 
	if(answer ===  questions[count].answer){
		document.getElementById(questions[count].letter).setAttribute("style","background: radial-gradient(green,green,white);")
		aciertos++
		questions[count].status=1
		count++
	}else if(answer==='pasapalabra'){
		document.getElementById(questions[count].letter).setAttribute("style","background: radial-gradient(orange,orange,white);")
		count++
	}else{
		document.getElementById(questions[count].letter).setAttribute("style","background: radial-gradient(red,red,white);")
		fallos++
		questions[count].status=1
		count++
	}
	pasapalabra()
}

function exit(){//acaba el juego
	document.getElementById('jugar').setAttribute("style","display:none")
	document.getElementById('instrucciones').setAttribute("style","display:none")
	document.getElementById('panel').setAttribute("style","display:none")//muestra el panel de pregunta y respuesta 
	document.getElementById("gameOver").innerHTML= '👏GAME OVER👏'
}

// function Pasapalabra(){
// 	//function Bienvenida(){//te dice si el usuario X quiere jugar o no 
// 		//var user=prompt('Hola, su nombre es: ')
// 		//var jugar=confirm('Bienvenido/a, '+user+', quiere usted jugar?')
// 		//return [user,jugar]
// 	//}
// 	function generaPreguntas(){
// 		var respuestas=['Aztecas','Bingo','Cena','Diablo','Ernesto','Frigo','Gotham','Hilo','IRA','Joker','Koala','Lumbar','Monitor','Noruega','Ornitorinco','Payaso','Quentin','Rinoceronte','Soprano','Tortuga','Unicornio','Viscolástico','Wanda','X-men','Yugo','Zaragoza'];
// 		var preguntas=['Pueblo centroamericano previo a la conquista Española','Juego de azar','Desayuno, comida y...','Lucifer','La importancia de llamarse...','Marca de helados','Ciudad protegida por Batman','Cosemos con él','Grupo terrorista de Irlanda del Norte durante el s.XX','Enemigo de Batman','Marsupial australiano','Parte inferior de la espalda','A través de él, un ordenador nos comunica las cosas','País nórdico','Animal mamífero-ave','Profesión de la risa','Nombre de Tarantino','Animal africano en peligro de extinción','Apellido de James Gandolfini en una serie que lleva su nombre','Reptil con caparazón','Caballo de fantasía','Tipo de colchón','Un pez llamado...','Mutantes','Sirve para arar','Capital aragonesa'];
// 		var adn=[];
// 		var abc='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 		var abecedario= abc.split('');
// 		for (i=0;i<abecedario.length;i++){
// 			var porCadaLetra={};
// 			porCadaLetra.letra=abecedario[i];
// 			porCadaLetra.respuesta=respuestas[i];
// 			porCadaLetra.pregunta=preguntas[i];
// 			adn.push(porCadaLetra)
// 		}
// 		return adn
// 	}

// 	function hacePregunta(objetoAdn){
// 		var responde=prompt('Con la '+objetoAdn.letra+': '+objetoAdn.pregunta);
// 		return responde
// 	}

// 	function comoResponde(respuestaUser, adnLista, indice, numCorrectas, numIncorrectas){//modifica la marca del objeto 
// 		if (respuestaUser===adnLista[indice].respuesta){
// 			console.log('Correcto!');
// 			adnLista.splice(indice,1);
// 			numCorrectas+=1;
// 			return [i,numCorrectas,numIncorrectas]

// 		}else if (respuestaUser==='Pasapalabra'){
// 			console.log ('Pasapalabra!');
// 			return [i+=1,numCorrectas,numIncorrectas]

// 		}else if (respuestaUser===null){
// 			i=adnLista.length;
// 			return ['Get Out', numCorrectas, numIncorrectas]

// 		}else{
// 			console.log('Incorrecto!');
// 			adnLista.splice(indice,1);
// 			numIncorrectas+=1
// 			return [i,numCorrectas,numIncorrectas]
// 		}
// 	}


// 	//function NewUser(){
// 		//var hay=confirm('Hay alguien que quiera jugar a Pasapalabra?');
// 		//return hay

// 	//}

// 	var marcador=[]
// 	var participante=document.getElementById("nombre").value;
// 	var correctas=0;
// 	var incorrectas=0;
// 	var adn=generaPreguntas();
// 	while (adn[0] !== undefined){
// 		i=0;
// 		while (i<adn.length){
// 			var respuesta=hacePregunta(adn[i]);
// 			var eval=comoResponde(respuesta,adn,i,correctas,incorrectas);
// 			if (eval[0]==='Get Out'){
// 				adn=[]
// 			}else{
// 				i= eval[0];
// 				correctas= eval[1];
// 				incorrectas= eval[2];
// 			}
			
// 		}
// 	}
// 	marcador.push([participante,correctas])
// 	newuser=NewUser()
		
	

// 	function ordena(marcador){
// 		return marcador.sort(function(a,b){
// 		return b[1]-a[1]
// 	})
// 	}

// 	var ranking=ordena(marcador);
// 	return ranking
// }
