
function father(){
	function nameF(name){
	return name
	}
	function ageF(age){
	return age
	}
	var name= 'Alex';
	var age= Math.floor((Math.random()*50)+1)
	if (ageF(age)<20){
		if (nameF(name)!=='Alex'){
			return nameF(name)+' ...You are not Alex!!!!'
		}else{
		return nameF(name)+' ' + ageF(age)+'...Are you sure?'
		}
	}else{
		if (nameF(name)!=='Alex'){
			return nameF(name)+' ...You are not Alex!!!!'
		}else{
			return nameF(name) + ' ' + ageF(age)
		}
	}
}

