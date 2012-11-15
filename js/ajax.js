 $(document).ready(function(){
	$("#sendmail").click(function(){
		var valid = '';
		var isr = ' is required.';
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		if (name.length<1) {
			valid += '<br />Name'+isr;
		}
		if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<br />A valid Email'+isr;
		}
		if (message.length<1) {
			valid += '<br />Message'+isr;
		}
		if (valid!='') {
                        $('#demo-form-title').hide();
			$("#response").fadeIn("slow");
			$("#response").html("<p>Please fill out all fields properly!</p>");
		}
		else {
			var datastr ='name=' + name + '&email=' + email + '&message=' + message;;
                        $('#demo-form-title').fadeOut();
                        $('form').fadeOut();
			$("#response").css("display", "block");
			$("#response").html("<p>Thank you for requesting a demo!</p>");
			$("#sub-response").css("display", "block");
			$("#sub-response").html("<p>An email has been sent to one of our representatives. You should expect to hear back from them shortly.</p>");
			$("#response").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		return false;
	});
});
function send(datastr){
	$.ajax({	
		type: "POST",
		url: "../mail.php",
		data: datastr,
		cache: false,
		success: function(html){
		$("#response").fadeIn("slow");
		$("#response").html(html);
		setTimeout('$("#response").fadeOut("slow")',2000);
	}
	});
}
