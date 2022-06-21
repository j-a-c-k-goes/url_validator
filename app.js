// - - - module import - - -
const prompt = require('prompt-sync')({sigint: true});
const URL = require('url').URL;

// - - - ionput url - - -
function get_url(){
	try{
		const url = prompt('enter a url to validate: ');
		console.log(`input received\t${url}`);
		return url;
	} catch(error){

	}
};

// - - - validate the url - - -
function validate_url (url) {
	try{
		new URL(url);
		return {msg: `${url}\t✅`, status: true};
	} catch (error) {
		return {msg: `${url}\t👎`, status: false};
	}
};

// - - - check the input value - - -
const check_url = validate_url(get_url()).msg;
console.log(check_url);