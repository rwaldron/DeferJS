var testloaded = {};
function log( message ) {
	var console = document.getElementById("results");
	var log = console.innerHTML;
	console.innerHTML = log + "<br/>" + message;
}
$( function() {
	var haveResults, ret = "<br/><i><b>Files or 'SubFiles' executed before DomReady ran in the following order:</b><br/>";
	for ( var i in testloaded ) {
		haveResults = true;
		ret += " " + i + ", ";
	}
	if ( haveResults ) {
		log( ret + "</i><br/>" );
	}
})
