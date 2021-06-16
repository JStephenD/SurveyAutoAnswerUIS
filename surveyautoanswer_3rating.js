$(function(){
	console.log('hello world');
	function CIT(){
		var num;
		var i;
		var lim = 0;
		for (i = 0; i < $('.btn-group').length; i++){
			num = 3;
			$('.btn-group:eq(' + i +')').find('input[value="' + num + '"]').attr('checked', true);
		};
	};
	$('div .table-header').on('click', function(){
		CIT();
	});
	$('div .widget-header').on('click', function(){
		CIT();
	});
	$('input').on('click', function(){
		console.log('hello world');
	});
});
