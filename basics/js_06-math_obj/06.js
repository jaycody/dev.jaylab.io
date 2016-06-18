//////////////////////////
// GLOBALS
var LESSON 			= '06-math_obj';
var MAIN_TOPIC		= '';
var MAIN_POINTS		= [];
var SUB_TOPICS		= [];
var TABLE_DATA		= [];
var gort 			= 'Klaatu barada nikto!';
// CONFIGURE & DISPLAY PAGE INFO
var pageInfo = {
	//display title
	pageTitle: 	 				"js_gungfu-" + LESSON,
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
		pageInfo.displayLastModified();		
	}
};
//  CONFIGURE & DISPLAY THE NOTE LAYOUT
var lessonInfo = {
	displayMainTopic: function(){
		var el_mainTopic 				= document.getElementById('mainTopic');
		el_mainTopic.innerHTML 			= MAIN_TOPIC;
	},
	displaySubTopics: function(){
		if (SUB_TOPICS[0]){
			for (var i = 0; i < SUB_TOPICS.length; i++) {
				var el_subTopic01		= document.getElementById('subTopic0' + i);
				el_subTopic01.innerHTML = SUB_TOPICS[i];	
			}
		}
	},
	displayMainPoints: function(){
		var mainPoint_elements			= document.getElementsByTagName('li');
		console.log(mainPoint_elements);
		for (var i = 0; i < MAIN_POINTS.length; i++){
			if (mainPoint_elements[i]){
				mainPoint_elements[i].innerHTML = MAIN_POINTS[i]; 
			}
		}
	},
	displayTableData: function() {
		var tableData_elements			= document.getElementsByTagName('TD');
		console.log(tableData_elements);
		for ( var i = 0; i < TABLE_DATA.length; i++){
			if (tableData_elements[i]){
			tableData_elements[i].innerHTML = TABLE_DATA[i];
			}
		}
	}
};


MAIN_TOPIC	= 
'Global Objects: the Math object';

SUB_TOPICS	= [
'examples',
];

MAIN_POINTS = [
'the math object has properties and methods for mathematical constants and functions',
'because it is known as a <strong>global object</strong>, you can use the Math object followed by the property',
];

TABLE_DATA	= [
	'Math.PI',
	'returns PI',
	'Math.PI = ' + Math.PI,

	'Math.round()',
	'Rounds to the nearest integer',
	'Math.round(Math.PI) = ' + Math.round(Math.PI),

	'Math.sqrt(n)',
	'Returns square root of positive number',
	'Math.sqrt(81) = ' + Math.sqrt(81),

	'Math.ceil()',
	'Rounds number UP to the nearest integer',
	'Math.ceil(1.61803) = ' + Math.ceil(1.61803),
	 
	'Math.floor()',
	'Rounds number DOWN to the nearest integer',
	'Math.floor(1.61803) = ' + Math.floor(1.61803),

	'Math.random()',
	'Generates a random number between 0 (inclusive) and 1(not inclusive)',
	'Math.random() = ' + Math.random(),

	'Math.sin()',
	'returns angles in Radians.  Remember SOCATOAH',
	'Math.sin(90) = ' + Math.sin(90),

	'Math.cos()',
	'returns angles in Radians.  Remember SOCATOAH',
	'Math.cos(90) = ' + Math.cos(90),

	'Math.tan()',
	'returns angles in Radians.  Remember SOCATOAH',
	'Math.tan(90) = ' + Math.tan(90),

	'Math.atan()',
	'returns angles in Radians.  Remember SOCATOAH',
	'Math.atan(90) = ' + Math.atan(90),

	'degrees = radians divided by (PI/180)',
	'converts radians to degrees',
	'Math.sin(90) = ' + Math.sin(90) + ' = ' + Math.sin(90)/(Math.PI/180) + ' degrees'


	
];

// div container example
var randomNumber 	= Math.random();
var msg 			= '<h2>random number between 0-1:</h2><p>' + randomNumber;
msg 				+= '<h2>Math.round(randomNumber)</h2><p>'		 + Math.round(randomNumber);	
msg 				+= '<h2>Math.sqrt(randomNumber)</h2><p>'		 + Math.sqrt(randomNumber);	
msg 				+= '<h2>Math.ceil(randomNumber)</h2><p>'		 + Math.ceil(randomNumber);	
msg 				+= '<h2>Math.floor(randomNumber)</h2><p>'		 + Math.floor(randomNumber);	
msg 				+= '<h2>random number is Not a Number --> isNaN(randomNumber)</h2><p>'		 + isNaN(randomNumber);	
msg 				+= '<h2>randomNumber.toFixed(2)</h2><p>'		 + randomNumber.toFixed(2);	
msg 				+= '<h2>randomNumber.toPrecision(1)</h2><p>'		 + randomNumber.toPrecision(1);
msg 				+= '<h2>randomNumber.toExponential()</h2><p>'		 + randomNumber.toExponential();	




var info_el 		= document.getElementById('info');
info_el.innerHTML 	= msg;





//////////////////////////
// FUNCTION CALLS
pageInfo.displayAll();
lessonInfo.displayMainTopic();
lessonInfo.displaySubTopics();
lessonInfo.displayMainPoints();
lessonInfo.displayTableData();
debugTools();





//////////////////////////
// DEBUG
function debugTools (){
	console.log('LESSON = ' + LESSON);
	console.log('pageTitle = ' + pageInfo.pageTitle);
	console.log('pageInfo object:');
	console.log(pageInfo);
}



