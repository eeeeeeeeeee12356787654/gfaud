var gas = 0; var gasStorage = 50; var gasGain = 1;
var oil = 0; var oilStorage = 50; var oilGain = 1;
var metal = 0; var metalStorage = 50; var metalGain = 1;
var stone = 0; var stoneStorage = 50; var stoneGain = 1;
var wood = 0; var woodStorage = 50; var woodGain = 1;
var science = 0; var scienceGain = 1;

function refresh(){
	document.getElementById("gas").innerHTML = gas;
	document.getElementById("oil").innerHTML = oil;
	document.getElementById("metal").innerHTML = metal;
	document.getElementById("stone").innerHTML = stone;
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("science").innerHTML = science;
}

function gainGas(){
	if(gas < gasStorage){
		gas += gasGain;
		refresh();
	}
}

function gainOil(){
	if(oil < oilStorage){
		oil += oilGain;
		refresh();
	}
}

function gainMetal(){
	if(metal < metalStorage){
		metal += metalGain;
		refresh();
	}
}

function gainStone(){
	if(stone < stoneStorage){
		stone += stoneGain;
		refresh();
	}
}

function gainWood(){
	if(wood < woodStorage){
		wood += woodGain;
		refresh();
	}
}

function gainScience(){
	science += scienceGain;
	refresh();
}

function buildLab(){
	if(science >= 20){
		if(metal >= 20){
			science -= 20;
			metal -= 20;
			scienceGain *= 2;
			document.getElementById("scienceGain").innerHTML = scienceGain;
			refresh();
			document.getElementById("labTab").className = "hidden";
		}
		else{
			alert("Not Enough Metal");
		}
	}
	else{
		alert("Not Enough Science");
	}
}

function unlockGas(){
	if(science >= 100){
		science -= 100;
		gasUnlock = true;
		document.getElementById("unlockGas").className = "hidden";
		document.getElementById("gasNav").className = "";
		document.getElementById("oilNav1").style.border = "";
		document.getElementById("oilNav2").style.border = "";
		refresh();
	}
	else{
		alert("Not enough Science");
	}
}

function unlockOil(){
	if(science >= 50){
		science -= 50;
		oilUnlock = true;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		refresh();
	}
	else{
		alert("Not enough Science");
	}
}
