//Ejercicios Tema 0

var name='Alex';
console.log(name);

var age=24;
console.log(age);

var info=[name, 'Peracaula',age];
console.log(info);

var data={name: name, age: age};
console.log(data);

for(i=0;i<info.length;i++){
	console.log(info[i])
}


var a=9;
var b=34;
if(a<b){
	console.log(b)
}else if(a===b){
	console.log('The numbers are equal')
}

var array=[1,2,3,4,5];
for(i=0;i<array.length;i++){
	if(i==Math.trunc(array.length/2)){
		console.log('We are in the middle of loop');
	}
	console.log(array[i]);
}

var myname='Johan';
var myage=24;
if(myname!==name || myage!==age){
	console.log('This is not you!');
}else{
	console.log("Hi!!! Glad to see u again!");
}


// Ejercicios Tema 1

//Strings
console.log(myname.length);

var myname='Alex Peracaula';
console.log(myname.substr(0,myname.indexOf(' ')));
console.log(myname.substr(myname.indexOf(' ')));

var myname='Mr. Peracaula';
console.log('My lastname is '+myname.substr(myname.indexOf(' ')));
console.log(myname.substr(myname.indexOf(' ')).toUpperCase());

var myname='Alex Peracaula';
console.log(myname[0]+'.'+myname.substr(myname.indexOf(' ')+1,1)+'.');

//Arrays

var myname=['A','L','E','X','P','E','R','A','C','A','U','L','A'];
console.log(myname.prototype.join('/'));

var myname= ['A','L','E','X'];
var newname=new String();
for(i=0;i<myname.length;i++){
	newname=newname+(i+1).toString()+'ø'+myname[i]+', '
}
console.log(newname);


var myname=['Alex','Peracaula',24];
console.log('My name is '+myname[0]+' and I am '+myname[2].toString());




var myname=['Alex','Peracaula',24];
function myCityAdd(myname,city){
	var newmyname=myname.push(city);
	console.log(myname);
}
myCityAdd(myname,'Barcelona');

function myCityDelete(myname,city){
	var newmyname=myname.pop(city);
	console.log(myname);
}
 myCityDelete(myname,'Barcelona');


var num=[1,2,3,4,5,6,7,8,9,10];
var multByTwo=num.map(x=>x*3);
console.log(multByTwo);


var num=[1,4,5,2,3,1];
num.sort(function(a,b){return a-b});
console.log(num);


function counting(string){
	string.toLowercase()
	var siRepeat=new Array();
	var siRepeatNum=new Array();
	var noRepeat=new Array();
	var array=string.split();
	for (i=0;i<array.length;i++){
		if (!siRepeat.includes(array[i])){
			var n=0;
			for(u=0;u<array.length;u++){
				if array[i]===array[u]{
					n++
				}
			}
			if n>1{
				siRepeat.push(array[i]);
				siRepeatNum.push(n);
			}else{
				noRepeat.push(array[i])
			}
		}
	}
	for (i=0;i<siRepeat;i++){
		console.log('La letra '+siRepeat[i]+' sale '+siRepeatNum[i].toString()+' veces')

	} 
	for (i=0;i<noRepeat;i++){
		console.log('La letra '+siRepeat[i]+' no se repite.')

	} 
}


//Numbers

var n=new Date();
n.getHours();
console.log(n)

var n=5.53;
console.log('Son las '+n.toString()+' de la tarde')

var n=5.53;
console.log('Son las '+Math.round(n).toString()+' de la tarde')

function sum(a,b){
	return a+b
}

function rest(a,b){
	return a-b
}

function mult(a,b){
	return a*b
}

function div(a,b){
	return a/b 
}



































