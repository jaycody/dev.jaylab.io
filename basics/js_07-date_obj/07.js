//////////////////////////
// GLOBALS
var LESSON 			= '07-date_obj';
var MAIN_TOPIC		= '';
var MAIN_POINTS		= [];
var SUB_TOPICS		= [];
var TABLE_DATA		= [];
var gort 			= 'Klaatu barada nikto!';
var today 			= new Date();
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
'creating an instance of the Date object';

SUB_TOPICS	= [
'var today = new Date();',
];

MAIN_POINTS = [
'in order to work with dates, you create an instance of the Date object.',
'you can then specify the time and date that you want it to represent',
'create an instance of the date object witht the date object constructor function',
'<strong>var today = new Date();</strong>',
"'today' now holds a single number that can be translated into the current date",
'the number of milliseconds since midnight on January 1, 1970.'
];

TABLE_DATA	= [
	'getDate() / setDate()',
	'returns/sets day of the month (1-31)',
	'day of month = today.getDate() = ' + today.getDate(),

	'getDay()',
	'returns day of the week (0-6)',
	'today.getDay() = ' + today.getDay(),

	'getFullYear() / setFullYear()',
	'returns/sets the year (4 digits)',
	'year = today.getFullYear() = ' + today.getFullYear(),

	'getHours() / setHours()',
	'returns/sets the hour (0-23)',
	'current hour = today.getHours() = ' + today.getHours(),

	'getMilliseconds() / setMilliseconds()',
	'Returns / sets the milliseconds (0-999)',
	'current millisecond = ' + today.getMilliseconds(),

	'getMinutes() / setMinutes()',
	'Returns / sets the minutes (0-59)',
	'today.getMinutes() = ' + today.getMinutes(),
	 
	'get.Month() / set.Month()',
	'Returns / sets the month (0-11)',
	'getMonth() = ' + today.getMonth(),

	'getSeconds() / setSeconds()',
	'Returns / sets the seconds (0-59)',
	'today.getSeconds() = ' + today.getSeconds(),

	'getTime() / setTime()',
	'Number of milliseconds since January 1, 1970, 00:00:00 UTC (Cordinated Universal Time) and a negative number for any time before',
	'today.getTime() = ' + today.getTime(),

	'getTimezoneOffset()',
	'Returns time zone offset in mins for locale',
	'today.getTimezoneOffset() = ' + today.getTimezoneOffset(),

	'toDateString()',
	"Returns 'date' as a human-readable string",
	'today.toDateString() = ' + today.toDateString(),

	'toTimeString()',
	"Returns 'time' as a human-readable string",
	'today.toTimeString() = ' + today.toTimeString(),

	'toString()',
	'Returns a string representing the specified date',
	'today.toString() = ' + today.toString()


	
];

// div container example
var msg 			= '<h2>today:</h2><p>' + today;
msg 				+= '<h2>today.getDate() of the month:</h2><p>'	+ today.getDate() + 'th';	
msg 				+= '<h2>today.getDay() of the week:</h2><p>'	+ today.getDay();	
msg 				+= '<h2>today.getFullYear()</h2><p>'		 	+ today.getFullYear();	
msg 				+= '<h2>today.getHours()</h2><p>'		 		+ today.getHours();	
msg 				+= '<h2>today.getMilliseconds()</h2><p>'		+ today.getMilliseconds();	
msg 				+= '<h2>today.getMinutes()</h2><p>'		 		+ today.getMinutes();	
msg 				+= '<h2>today.getMonth()</h2><p>'		 		+ today.getMonth();
msg 				+= '<h2>today.getSeconds()</h2><p>'				+ today.getSeconds();
msg 				+= '<h2>today.getTime() millis since jan 1, 1970</h2><p>'				+ today.getTime();	
msg 				+= '<h2>years since jan 1, 1970 (divide total millis since jan 1, 1970 ( ' + today.getTime() + ') by 31,556,900,000millis/year): </h2><p>'		+ today.getTime()/31556900000 + ' years';	
msg 				+= '<h2>today.getTimezoneOffset() in min for locale</h2><p>'			+ today.getTimezoneOffset();
msg 				+= '<h2>today.toDateString() for human-readable date</h2><p>'			+ today.toDateString();
msg 				+= '<h2>today.toTimeString() for human-readable time</h2><p>'			+ today.toTimeString();
msg 				+= '<h2>today.toString() for human-readable date&time</h2><p>'			+ today.toString();

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



