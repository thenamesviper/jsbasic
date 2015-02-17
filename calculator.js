var Calculator = {
		add: function(x,y) {
			return x + y;
		},
		subtract: function(x,y) {
			return x-y;
		},
		multiply: function(x,y) {
			return x*y;
		},
		divide: function(x,y) {
			return x/y;
		},
		square: function(x) {
			return x*x;
		},
		squareRoot: function(x) {
			return Math.sqrt(x);
		},
		toThePower: function(x,y) {
			return Math.pow(x,y);
		}
	};
	
$(document).ready(function() {
	$("#equals").click(function() {
		alert(Calculator.add(3,4));
	}),
	
	//view inputted numbers on screen
	$(".digit").click(function() { 
		var $outputText = $("#output").text();
		var containsDecimal = false;
		if ($outputText.length<11) {
			if($outputText == "0") {
				$("#output").text("");
				$outputText = "";
			}
			$("#output").text($outputText + $(this).text());
		}
	}),

	$("#clear").click(function() {
		$("#output").text("0");
	})
});





