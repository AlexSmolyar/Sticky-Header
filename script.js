function setAdditionalMenu() {
	var x = document.getElementById("myTopnav");
	if (x.className === "nav") {
		x.className += " responsive";
	} else {
		x.className = "nav";
	}
}