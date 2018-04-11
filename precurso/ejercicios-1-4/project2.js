
function airline(){
	var listOfFlights=[
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];
	var userName= prompt('Hello, what is your name if I may ask?')
	console.log('Hi, '+userName+', welcome to Skylab Airlines!')
	
	function listing(){
		for(i=0;i<listOfFlights.length;i++){
			if (listOfFlights[i].scale){
				var yesNo='a';
			}else{
				var yesNo='no'
			}
			console.log('The flight departing from '+listOfFlights[i].from+' to '+listOfFlights[i].to+' has a cost of '+listOfFlights[i].cost+' Euros and has '+yesNo+' scale.')
		}
	}
	function avPrice(){
		var totalCost=0;
		for(i=0;i<listOfFlights.length;i++){
			totalCost+=listOfFlights[i].cost;
		}
		console.log('The average price of the flights is '+totalCost/listOfFlights.length+' Euros')
	}
	
	function Scale(){
		var flightsWithScale=0
		for(i=0;i<listOfFlights.length;i++){
			if (listOfFlights[i].scale){
				flightsWithScale+=1
			}
		}
		console.log('There are '+flightsWithScale+' flights with scale');
		
	}
	
	function lastDestinations(){
		var lastDestinies=new Array();
		for(i=0;i<listOfFlights.length;i++){	
			if (listOfFlights[i].id>=(listOfFlights.length-5)){
				lastDestinies.push(listOfFlights[i].to)
			}
		}	
		console.log('The last 5 destinies are: '+lastDestinies);
	}
	
	return listing(), avPrice(), Scale(), lastDestinations()
}