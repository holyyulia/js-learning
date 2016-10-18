function output(text) {
	console.log(text);
}

var number = 1;
var str = "this is text";
var thisIsNull = null;
var thisIsUndefined = undefined;
var array = [1,2,3,4];
var json = { // JavaScript Object Notation
	something: 'something else',
	somethinElse: 'omg'
};
var bool = false;
// logical or ||
// logical and &&

function someFunc(a,b,c,d) {
	function someInnerFunction() {
		var z = 123;
	}
	console.log(z);
	return [a,b,c,d];
}

function logTime() {
	console.log(new Date())
}

function show() {
	var el = $('#hidden');
	if (el.is(":visible")) {
		el.hide();
	} else {
		el.show();
	}
}

function hideParagraphs() {
	$('.textParagraph').hide();
}

function showGreeting() {
	var name = $('#name-input').val();
	$('.greetingParagraph').text("Привет " + name);
}

function showCredentials(){
	var login = $('#login').val();
	var password = $('#password').val();
	$('#loginParagraph').text("Login: " + login);
	$('#passwordParagraph').text("Password: " + password);
}

$('.showValues').click(showCredentials);
$('#login').focus(logTime);


function a(f, value) {
	var result = f(value);
	console.log(result);
}

function c(value) {
	return value;
}

a.someShittyAttribute = "shitty value";



var arr = [1,2,3,4,10]
for (var i=0; i<arr.length;i++) {
	console.log(arr[i]);
}
