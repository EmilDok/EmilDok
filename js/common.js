$(document).ready(function() {
	
	$('.popup').magnificPopup({
		type:"image"
	});

	$('.popup2').magnificPopup({
		type:"image"
	});

	$('.button-1').magnificPopup();

	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				$.magnificPopup.close();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});