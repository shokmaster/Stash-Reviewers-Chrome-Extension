$( document ).ready(function() {
    storage.loadGroups(function(item){
    	$('#text_json').val(item);    	
    });

    storage.loadHipChatUsername(function(username){
    	$('#hipchat_username').val(username);    	
    });

	storage.loadJunction(function(item) {
		$('#text_junction').val(item);
	});

    $('#bt_save').click(function(){
    	var btn = $(this);
    	var newValue = $('#text_json').val();    	
		var newJunction = $('#text_junction').val();

    	storage.saveGroups(newValue, function(){
    		//var username = $('#hipchat_username').val();    	
	    	//storage.saveHipChatUsername(username, function(){
	    	//	alert('json saved!');
	    	//});
			storage.saveJunction(newJunction, function() {
				btn.text('Saved!');
				btn.removeClass('btn-primary').addClass('btn-success');
				//alert('Saved!');
	    	});
		});
    });

    $('#bt_close').click(function() {
    	window.close();
    })
});
