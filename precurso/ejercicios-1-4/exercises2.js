var avenger={name:'Tony', class:'VII', id: 1};
console.log(Object.keys(avenger));
console.log(avenger.name,avenger.class,avenger.id);
avenger.class='XI'
delete avenger.id;
avenger.city='Gotham';
console.log(avenger.city);
console.log('There are '+Object.keys(avenger).length+' info fields')
avenger.fullName=avenger.name;
delete avenger.name;
avenger.fullName+='Stark';
console.log(avenger)
console.log('Hi there, I am '+avenger.fullName+'and I am class '+avenger.id)
avenger.markAverage=8;
avenger.country='US';
avenger.job='Avenger';
avenger.studies='Superior';
Object.values(avenger)


function avenger(name, city, power, mark, job){
	this.fullName=name;
	this.city=city;
	this.power=power;
	this.mark=mark;
	this.job=job;
	this.listOfProperties= function(){
		console.log(this.fullName+','+this.city+'...')
	}
}
var tony=new avenger('Tony Stark', 'New York', 'Suit', 9, 'Engineer');
console.log(tony)
var hulk=new avenger('Bruce Banner', 'New York', 'Green Rage', 8, 'Scientist');
console.log(hulk)















