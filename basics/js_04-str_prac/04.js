//////////////////////////
// GLOBALS
var LESSON 			= '04-str_prac';
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
'String object - practice exercise';

SUB_TOPICS	= [
'examples',
];

MAIN_POINTS = [
'whenever you have a value that is a string, you can use the properties and methods of the String object on that value',
];

TABLE_DATA	= [
	'length',
	'Returns number of characters in the string',
	'gort.length',
	gort.length,

	'toUpperCase()',
	'changes the string to uppercase',
	'gort.toUpperCase();',
	gort.toUpperCase(),

	'toLowerCase()',
	'changes string to upper',
	'gort.toLowerCase();',
	 gort.toLowerCase(),

	 'charAt()',
	 'Takes an index number as a parameter, and returns the character found at that position',
	 'gort.charAt(3);',
	 gort.charAt(3),
	 
	 'indexOf()',
	 'Returns index number of the FIRST time a character or set of characters is found within a string',
	 "gort.indexOf('da');",
	 gort.indexOf('da'),

	 'lastIndexOf()',
	 'Returns index of the last time a char or set of chars',
	 "gort.lastIndexOf('a');",
	 gort.lastIndexOf('a'),

	 'substring()',
	 'Returns characters found between two index numbers where the char for first index is included and the char for the last index num is not included',
	 'gort.substring(3,8);',
	 gort.substring(3,8),

	 'split()',
	 'When a char is specified, it splits the string each time it is found, then stores each part in an array',
	 "document.URL.split('/');",
	 document.URL.split('/'),

	 'split()',
	 'When a char is specified, it splits the string each time it is found, then stores each part in an array',
	 "gort.split(' ');",
	 gort.split(' '),

	 'trim()',
	 'Removes whitespace from start and end of string',
	 'gort.trim();',
	 gort.trim(),

	 'replace()',
	 'Like find and replace, it finds the first char argument and replaces with the second char argument',
	 "gort.replace('Klaatu', 'Nexus');",
	 gort.replace('Klaatu', 'Nexus')
];

// div container example
var infoMsg 		= gort;
infoMsg 			+= '<h2>length:</h2><p>' 	+ gort.length 			+ '</p>';
infoMsg				+= '<h2>uppercase:</h2><p>' + gort.toUpperCase() 	+ '</p>';
infoMsg				+= '<h2>lowercase:</h2><p>'	+ gort.toLowerCase() 	+ '</p>';
infoMsg				+= '<h2>character index: 12</h2><p>' + gort.charAt(12) + '</p>';
infoMsg				+= '<h2>index of first aa:</h2><p>' + gort.indexOf('aa') + '</p>';
infoMsg				+= "<h2>last index of '!'</h2><p>" + gort.lastIndexOf('!') + '</p>';
infoMsg				+= "<h2>character index: 8-14</h2><p>" + gort.substring(8, 14) + '</p>';
infoMsg				+= "<h2>replace: 'nikto' with 'niko'</h2><p>" + gort.replace('nikto', 'niko') + '</p>';

var info_el 		= document.getElementById('info');
info_el.innerHTML 	= infoMsg;





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



