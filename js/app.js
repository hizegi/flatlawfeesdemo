window.onload = function() {

	// CHANGE TOPICS & CORRESPONDING SUBTOPICS ON <select> MENUS
	$("#topic-choice").change(function() {

	  if ($(this).data('options') == undefined) {
	    //Taking an array of all options-2 and kind of embedding it on the select1*/
	    $(this).data('options', $('#subtopic option').clone());
	  }

	  var id = $(this).val();
	  var options = $(this).data('options').filter('[value=' + id + ']');
	  $('#subtopic').html(options);
	});

};

