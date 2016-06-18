function validateData() {
	var entered;
	var text;

	entered=document.getElementById("numb").value;

	if (entered > 10){
		console.log("bigger than 10");
		document.getElementById("message").innerHTML = "THIS IS BIG";
	} else {
		console.log("smaller than 10");
		document.getElementById("message").innerHTML = "THIS IS SMALLER";
	}



}