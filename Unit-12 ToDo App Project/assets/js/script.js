// Insert new todo to list
$('#insert-tab').keypress(function(event) {
	if (event.which === 13) {
		var task = $(this).val();

		// add a click listener to all the new list item - for strike through when clicked
		var newTask = '<li><span class="del-button"><i class="fa fa-trash"></i></span> ' + task + '</li>';
		$('#task-list').append(newTask);

		$(this).val('');
	}
});

// toggle add todo bar functionality
$('.fa-plus-square').on('click', function() {
	$('#insert-tab').fadeToggle(200);
});

// adding removal button to list
$('#task-list').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});

	event.stopPropagation();
});

// strike-through when clicked on the li
$('#task-list').on('click', 'li', function() {
	$(this).css('textDecoration', 'line-through');
});
