window.onload = function() {
	document.getElementsByClassName("mobilemenutrigger")[0].addEventListener("click", mobileMenuFunc);
	document.getElementsByClassName("exit")[0].addEventListener("click", closeFunc);
	document.getElementById("mobilemenu").addEventListener("click", closeFunc);
}

function mobileMenuFunc() {
	var mobile = document.getElementById("mobilemenucontainer");
	mobile.style.display = "flex";
	mobile.className = "fadeinClass";
	document.body.style.overflow = "hidden";
}

function closeFunc() {
	var mobile = document.getElementById("mobilemenucontainer");
	mobile.style.display = "none";
	document.body.style.overflow = "visible";
}