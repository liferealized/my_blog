/** $Id: site.js 275 2007-01-11 21:06:20Z garrett $ **/

/**
 * simplelog site functions
 * hides appropriate divs on launch, shows divs, etc, etc
 * search box functionality as well
 */
 
window.onload = function()
{
	init(); // see below, this is to get around global vars not being ready
}
function init()
// init vars, run some initial functions
{
	body_container = document.getElementById('body-wrapper');
	search_field = document.getElementById('q');
	search_form = document.getElementById('search-form');

	default_field_value = 'Type something and hit enter to search...';

	passive_search_text_color = '#777';
	active_search_text_color = '#000';

	isIE = false;

	searchInit(search_field); // capture key events
	clearSearch(); // set everything right with search field / areas
}

function searchInit()
{
	if (navigator.userAgent.indexOf('Safari') > 0)
	{
		search_field.addEventListener('keydown',searchKeyPress,false);
	}
	else if (navigator.product == 'Gecko')
	{
		search_field.addEventListener('keypress',searchKeyPress,false);
	}
	else
	{
		search_field.attachEvent('onkeydown',searchKeyPress);
		search_field.blur();
		isIE = true;
	}
}
function searchKeyPress(event)
{
	if (event.keyCode == 27) // escape
	{
		clearSearch();
	}
	
	if (event.keyCode == 13) // enter
	{
		search_form.submit();
	}
}
function clearSearch()
// clears the search field, sets its default color and value, hides appropriate areas
{
	search_field.style.color = passive_search_text_color;
	search_field.value = default_field_value;
}
function searchFocus()
{
	search_field.style.color = active_search_text_color;
	if (search_field.value == default_field_value)
	{
		search_field.value = '';
	}
}