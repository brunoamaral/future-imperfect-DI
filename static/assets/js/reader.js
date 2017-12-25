// For more information on this script, visit https://github.com/brunoamaral/marceloJS 

debug = false;

// How long did the user stay in this page? 
startTime = new Date();
beginning = startTime.getTime();
totalTime = 0;

// Calculate reading time. In the future, we identify the element by a less arbitrary method.
var article = document.getElementById('main');
reading_time = article.textContent.split(' ').length / 200;

scrolled75 = false;
ga_event_sent = false;

window.addEventListener('scroll', function(e) {
	var scrollTop = window.pageYOffset;
	var docHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	var winHeight = window.innerHeight;
	var scrollPercent = (scrollTop) / (docHeight - winHeight);
	var scrollPercentRounded = Math.round(scrollPercent*100);

	if(scrollPercentRounded > 75){
		scrolled75 = true;
	}
	if(debug){
		console.log(scrollPercentRounded);
		console.log(scrolled75);
	};
});

// This funciotn runs every 100 miliseconds and checks if the reading time and time on page ratio is acceptable to mark it as read.
function measure(){
	if(debug){console.log('running')}
	var currentDate = new Date();
	var currentTime = currentDate.getTime();
	var time_on_page = Math.round((currentTime - beginning) / 1000) / 60;

	// check how much of the article the user read based on time on page.
	var read_ratio = time_on_page / reading_time;

	if (read_ratio >= 0.75 && scrolled75 && !ga_event_sent){
		if (!debug) {
			//ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
			ga('send', 'event', 'Reader Actions', 'User Read Article', window.location.host + window.location.pathname, { nonInteraction: true});
			ga_event_sent = true;
			// another option would be document.title;
		}else{
			ga_event_sent = true;
			console.log("article was read :: ga('send', 'event', 'Reader Actions', 'User Read Article'," + window.location.host + window.location.pathname + ");");
			console.log('ga_event_sent: ' + ga_event_sent);
		};
	};
};	

window.setInterval(function(){
  measure();
}, 100);

function numberOfReadings(){
	console.log('TO DO. This function collects data from google analytics and updates the metadata of the post.')
}