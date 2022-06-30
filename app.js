// - - - module import - - -
const prompt = require('prompt-sync')({sigint: true});
const URL = require('url').URL;

// - - - input url - - -
function get_url(){
	try{
		const url = prompt('enter a url to validate: ');
		console.log(`input received\t${url}`);
		return url;
	} catch(error){ console.error(error); return 1;}
};

// - - - validate the url - - -
function validate_url (url) {
	try{
		new URL(url);
		return {msg: `${url}\t✅`, status: 0};
	} catch (error) {
		console.error(error);
		return {msg: `${url}\t👎`, status: 1};
	}
};

// - - - bind function to variable with prompt result as the function's input - - -
const check_url = validate_url(get_url()).msg;

// - - - log to console - - -
console.info(check_url);
