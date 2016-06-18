/////////////////COMMON TO ALL EXERCISES IN THIS js/gongfu DIRECTORY//////////////////////
//calc location and last modified for the header
displayPageInfo();
function displayPageInfo(){
	//display title
	var pageTitle 	 		= "js_gungfu-" + document.title;
	var titleElement 		= document.getElementById('title');
	titleElement.innerHTML 	= pageTitle;
	//display URL
	var pwd_el = document.getElementById('pwd');
	pwd_el.innerHTML = document.URL;
	//display lastModified
	var lastMod_el = document.getElementById('lastModified');
	lastMod_el.innerHTML = "updated: <strong>" + document.lastModified + "</strong>";

}




function returnToIndex_js() {
	window.open('http://chaote.local/~jay/jaylab.io/public_html/dev/js/');
}
function returnToIndex_dev() {
	window.open('http://chaote.local/~jay/jaylab.io/public_html/dev/');
}
/////////////////COMMON TO ALL EXERCISES IN THIS js/gongfu DIRECTORY//////////////////////