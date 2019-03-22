
$function(){
	function CIT(){
		var num;
		var i;
		var lim = 0;
		for (i = 0; i < $('.btn-group').length; i++){
			num = 5 - ((Math.floor(Math.random() * 5) + 1) % (5-lim));
			if (i === $('.btn-group').length){	
				$('.btn-group:eq(' + i +')').find('input[value="' + num%2 + '"]').attr('checked', true);
			}
			else{
				$('.btn-group:eq(' + i +')').find('input[value="' + num + '"]').attr('checked', true);
			}
		};
		$('#Comments').html('Subscribe to PewDiePie!').attr('value', 'Subscribe to PewDiePie!');
	};
	$('div .table-header').on('click', function(){
		CIT();
	});
});