//////////////////////////
// GLOBALS
var LESSON 			= '01-css';
var today 			= new Date();
// CONFIGURE & DISPLAY PAGE INFO
var pageInfo = {
	//display title
	pageTitle: 	 				"js_gungfu-w3_tutorials-html-" + LESSON,
	displayLesson: function(){
		var lesson_el 	= document.getElementById('lesson');
		lesson_el.innerHTML = LESSON;
	},

	displayTitle: function() {
		var titleElement 		= document.getElementById('pageTitle');
		titleElement.innerHTML 	= this.pageTitle;
	},
	displayURL:	function(){
		var url_el				= document.getElementById('url');
		url_el.innerHTML 		= document.URL;
	},
	displayDate: function() {
		var date_el				= document.getElementById('date');
		date_el.innerHTML 		= 'today: ' + today;
	},
	displayLastModified: function(){
		var lastMod_el			= document.getElementById('lastModified');
		lastMod_el.innerHTML 	= document.lastModified;
	},
	displayReturnToIndex_js: function(){
		window.open('http://chaote.local/~jay/jaylab.io/public_html/dev/js/');
	},
	displayReturnToIndex_dev: function(){
		window.open('http://chaote.local/~jay/jaylab.io/public_html/dev/');
	},
	displayAll: function(){
		pageInfo.displayLesson();
		pageInfo.displayTitle();
		pageInfo.displayURL();
		pageInfo.displayDate();
		pageInfo.displayLastModified();		
	}
};

// FUNCTION CALLS
pageInfo.displayAll();
debugTools();





//////////////////////////
// DEBUG
function debugTools (){
	console.log('LESSON = ' + LESSON);
	console.log('pageTitle = ' + pageInfo.pageTitle);
	console.log('pageInfo object:');
	console.log(pageInfo);
}



