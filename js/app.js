$(document).ready(function () {
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


	// TOGGLES FAQ QUESTIONS/ANSWERS
	for (var i = 1; i < 50; i++){
		$("#question" + i).click(function(){
			var $answer = $("#answer" + i);
			$(this).next().toggleClass('hidden');
		})
	}

	//CONTACT US: multi-check options for e-mail
	var array = [];
		$("select").on('change', function()	 {
		array = [];
		var $testing = $( "select option:selected" ).text();
		console.log($testing);
			array.push($testing)
			$('#hidden_input').val(array);
		});

});
