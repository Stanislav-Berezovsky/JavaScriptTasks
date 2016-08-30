function _(str){	
	var selector =  str[0];
	var name = str.slice(1);
	switch(selector){
		case "#" : 
			this.context = document.getElementById(name);
		case "." :
			this.context = document.getElementsByClassName(name);
		default :
			this.context = document.querySelectorAll(str);
	}
}

_.prototype.addClass = function(str) {
	for (var item in this.context){
		item.classList.add(str);
	}
	return this;	
};