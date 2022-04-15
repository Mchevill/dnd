function statsOn(){
	x = document.getElementById('visible');
	x.style.visibility = "visible";
	y = document.getElementById('menujs');
	y.style.top = "380px";
};

function statsOff(){
	x = document.getElementById('visible');
	x.style.visibility = "hidden";
	y = document.getElementById('menujs');
	y.style.top = "558px";
};

function statsOnOff(){
	z = document.getElementById('visible');

	if (z.style.visibility == 'hidden'){
		statsOn();
	} else {
		statsOff();
	}
};


function load(){
	statsOnOff();
};