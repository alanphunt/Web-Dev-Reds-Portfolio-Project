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

window.onload = function(){
	document.getElementById("hero").className = "fadeinClass";
};

window.onscroll = function(){
	var proficiencies = document.getElementById("proficiencies");	
	var work = document.getElementById("workhistory");
	var projects = document.getElementById("projects");
	
	if(window.pageYOffset >= education.offsetTop + 250)
		education.className = "fadeRightClass";
	
	if(window.pageYOffset >= proficiencies.offsetTop + 250){
		//proficiencies.className = "fadeLeftClass";
		proficiencies.style.animation = "fadeInLeft 1s ease 0s normal 1 forwards";
	}

	if(window.pageYOffset >= work.offsetTop + 250)
		work.className = "fadeRightClass";
	
	if(window.pageYOffset >= projects.offsetTop + 250)
		projects.className = "fadeLeftClass";
};