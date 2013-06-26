$(document).ready(function() {
	users();
	
});


	function users() {
		$.ajax({ 
			url: '/users',
			type: 'POST',
			cache: false, 
			success: function(data){
			if (typeof data.redirect == 'string' )window.location = data.redirect;
			else if (typeof data.error == 'string' )alert(data.error);
			else {
				var $div;
				for ( var i = 0; i < data.length; i++ ){
					$div = $('<div class="user" id="'+data[i]._id+'">'+data[i].name+'</div>');
					$div.click(follow);
					$('#users').prepend($div);
					}
				}
			}
		});	
	}

	function follow(event) {
		$.ajax({ 
			url: '/follow',
			type: 'POST',
			cache: false, 
			data: { id: event.target.id},
			success: function(data){
			if (typeof data.redirect == 'string' )window.location = data.redirect;
			else if (typeof data.error == 'string')alert(data.error);
			else alert(data);
			}
		});
	}

