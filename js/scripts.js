/*!
* Start Bootstrap - Full Width Pics v4.3.0 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function handle_irisform(event) {
	event.preventDefault();
	var user_input = $('#irisform input[name="password"]').val();

	if (user_input == 'srsi') {
		$('#irismodal').modal({keyboard: true});

		$('#iriscontent').html($('#irismodal .modal-body').html());
	} else {
		$('#wrongpassword').modal({keyboard: true});
	}
}


$(document).ready(function() {
	$('#irisform').on('submit', handle_irisform);
});
