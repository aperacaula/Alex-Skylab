function Pasapalabra(){
	//var abc='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	//var abecedario= abc.split('');
	var usuarios=['Paco','Carlos']
	var puntos=[]
	for (u=0;u<usuarios.length;u++){
		var usuario=usuarios[u];
		var respuestas=['Aztecas','Bingo','Cena','Diablo','Ernesto','Frigo','Gotham','Hilo','IRA','Joker','Koala','Lumbar','Monitor','Noruega','Ornitorinco','Payaso','Quentin','Rinoceronte','Soprano','Tortuga','Unicornio','Viscolástico','Wanda','Yugo','Zaragoza'];
		var preguntas=['Pueblo centroamericano previo a la conquista Española','Juego de azar','Desayuno, comida y...','Lucifer','La importancia de llamarse','Marca de helados','Ciudad protegida por Batman','Cosemos con él','Grupo terrorista de Irlanda del Norte durante el s.XX','Enemigo de Batman','Marsupial australiano','Parte inferior de la espalda','A través de él, un ordenador nos comunica las cosas','País nórdico','Animal mamífero-ave','Profesión de la risa','Nombre de Tarantino','Animal africano en peligro de extinción','Apellido de James Gandolfini en una serie que lleva su nombre','Reptil con caparazón','Caballo de fantasía','Tipo de colchón','Un pez llamado...','Sirve para arar','Capital aragonesa'];
		var correctas=0;
		var incorrectas=0;
		while (respuestas[0] !== undefined){
			i=0;
			while (i<respuestas.length){
				var contesta=prompt('Con la '+(respuestas[i])[0]+' : '+preguntas[i]);
				if (contesta===respuestas[i]){
					console.log('Correcto!');
					respuestas.splice(i,1);
					preguntas.splice(i,1);
					correctas+=1
				}else if (contesta==='Pasapalabra'){
					console.log('Pasapalabra!')
					i+=1

				}else{
					console.log('Incorrecto!');
					respuestas.splice(i,1);
					preguntas.splice(i,1);
					incorrectas+=1
				}
			}
		}
		puntos.push([usuario,correctas])
	}
	return puntos.sort(function(a,b){
		return a[1]-b[1]
	})
}



function Pasapalabra(){
	function Bienvenida(){//te dice si el usuario X quiere jugar o no 
		var user=prompt('Hola, su nombre es: ')
		var jugar=confirm('Bienvenido/a, '+user+', quiere usted jugar?')
		return [user,jugar]
	}
	function generaPreguntas(){
		var respuestas=['Aztecas','Bingo','Cena','Diablo','Ernesto','Frigo','Gotham','Hilo','IRA','Joker','Koala','Lumbar','Monitor','Noruega','Ornitorinco','Payaso','Quentin','Rinoceronte','Soprano','Tortuga','Unicornio','Viscolástico','Wanda','X-men','Yugo','Zaragoza'];
		var preguntas=['Con la A: Pueblo centroamericano previo a la conquista Española','Con la B: Juego de azar','Con la C: Desayuno, comida y...','Con la D: Lucifer','Con la E: La importancia de llamarse...','Con la F: Marca de helados','Con la G: Ciudad protegida por Batman','Con la H: Cosemos con él','Con la I: Grupo terrorista de Irlanda del Norte durante el s.XX','Con la J: Enemigo de Batman','Con la K: Marsupial australiano','Con la L: Parte inferior de la espalda','Con la M: A través de él, un ordenador nos comunica las cosas','Con la N: País nórdico','Con la O: Animal mamífero-ave','Con la P: Profesión de la risa','Con la Q: Nombre de Tarantino','Con la R: Animal africano en peligro de extinción','Con la S: Apellido de James Gandolfini en una serie que lleva su nombre','Con la T: Reptil con caparazón','Con la U: Caballo de fantasía','Con la V: Tipo de colchón','Con la W: Un pez llamado...','Con la X: Mutantes','Con la Y: Sirve para arar','Con la Z: Capital aragonesa'];
		var adn=[];
		var abc='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var abecedario= abc.split('');
		for (i=0;i<abecedario.length;i++){
			var porCadaLetra={};
			porCadaLetra.letra=abecedario[i];
			porCadaLetra.respuesta=respuestas[i];
			porCadaLetra.pregunta=preguntas[i];
			adn.push(porCadaLetra)
		}
		return adn
	}

	function hacePregunta(objetoAdn){
		var responde=prompt('Con la '+objetoAdn.letra+': '+objetoAdn.pregunta);
		return responde
	}

	function comoResponde(respuestaUser, adnLista, indice, numCorrectas, numIncorrectas){//modifica la marca del objeto 
		if (respuestaUser===adnLista[indice].respuesta){
			console.log('Correcto!');
			adnLista.splice(indice,1);
			numCorrectas+=1;
			return [i,numCorrectas,numIncorrectas]

		}else if (respuestaUser==='Pasapalabra'){
			console.log ('Pasapalabra!');
			return [i+=1,numCorrectas,numIncorrectas]

		}else if (respuestaUser===null){
			i=adnLista.length;
			return ['Get Out', numCorrectas, numIncorrectas]

		}else{
			console.log('Incorrecto!');
			adnLista.splice(indice,1);
			numIncorrectas+=1
			return [i,numCorrectas,numIncorrectas]
		}
	}


	function NewUser(){
		var hay=confirm('Hay alguien que quiera jugar a Pasapalabra?');
		return hay

	}

	var marcador=[]
	var newuser=NewUser();
	while (newuser){
		var participante=Bienvenida();
		var correctas=0;
		var incorrectas=0;
		if (participante[1]){
			var adn=generaPreguntas();
			while (adn[0] !== undefined){
				i=0;
				while (i<adn.length){
					var respuesta=hacePregunta(adn[i]);
					var eval=comoResponde(respuesta,adn,i,correctas,incorrectas);
					if (eval[0]==='Get Out'){
						adn=[]
					}else{
						i= eval[0];
						correctas= eval[1];
						incorrectas= eval[2];
					}
					
				}
			}
			marcador.push([participante[0],correctas])
			newuser=NewUser()
			
		}else{
			newuser=NewUser()
		}
	}

	function ordena(marcador){
		return marcador.sort(function(a,b){
		return b[1]-a[1]
	})
	}

	var ranking=ordena(marcador);
	return ranking
}




















