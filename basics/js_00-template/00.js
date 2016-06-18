//////////////////////////
// GLOBALS
var LESSON 			= '00-template';
var MAIN_TOPIC		= '';
var SUB_TOPICS		= [];
var MAIN_POINTS		= [];
//////////////////////////
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
//////////////////////////
//  CONFIGURE & DISPLAY THE NOTE LAYOUT
var lessonInfo = {
	displayMainTopic: function(){
		var el_mainTopic 		= document.getElementById('mainTopic');
		el_mainTopic.innerHTML 	= MAIN_TOPIC;
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
	}
};

MAIN_TOPIC	= 
'main topic';

SUB_TOPICS	= [
'subTopic00',
'subTopic01',
'subTopic02'
];

MAIN_POINTS = [
'point1',
'point2',
'point3',
'point4',
'point5',
'point2',
'point3',
'point4',
'point5',
'point2',
'point3',
'point4',
];

//////////////////////////
// FUNCTION CALLS
pageInfo.displayAll();
lessonInfo.displayMainTopic();
lessonInfo.displaySubTopics();
lessonInfo.displayMainPoints();
debugTools();

//////////////////////////
// DEBUG
function debugTools (){
	console.log('LESSON = ' + LESSON);
	console.log('pageTitle = ' + pageInfo.pageTitle);
	console.log('pageInfo object:');
	console.log(pageInfo);
}



