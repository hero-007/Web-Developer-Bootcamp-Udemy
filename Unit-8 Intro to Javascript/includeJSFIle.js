var res = prompt('Are we there yet ?');

while (res === 'not yet' || res === 'no') {
	res = prompt('Are we there yet ?');
}

alert('Yeah!! we finally made it.');
