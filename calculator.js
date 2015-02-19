var Calculator = {
		selectOperation: function(operator, firstNumber, secondNumber) {
			switch(operator) {
				case "+":
					return this.add(firstNumber, secondNumber);
					break;
				case "-":
					return this.subtract(firstNumber,secondNumber);
					break;
				case "X":
					return this.multiply(firstNumber, secondNumber);
					break;
				case "\u00F7": //division sign
					return this.divide(firstNumber, secondNumber);
					break;
				case "^":
					return this.toThePower(firstNumber, secondNumber);
					break;
				default:
					return "ERROR";
			}
		},
		immediateOperation: function(operator, number) {
			switch(operator) {
				case "x\u00B2": //x^2
					return this.square(number);
					break;
				case "\u221A": //radical symbol
					return this.squareRoot(number);
					break;
				default:
					return "ERROR";
			}
		},
		add: function(x,y) {
			return x+y;
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
	var $firstNumber;
	var $secondNumber;
	var $operatorSelected = "";
	var operatorChosen = false;
	
	function displayResults($result) {
		$resultLength = $result.toString().length;
		if($resultLength<28 && isFinite($result)) {
			if($resultLength<12) {
				$("#output").css("font-size", "87px");	
			} else if($resultLength<22) {
				$("#output").css("font-size", "45px");
			} else {
				$("#output").css("font-size", "35px");
			};
			$("#output").text($result);
		} else {
			$("#output").addClass("too-large");
			$("#output").text("Number is too large");
		}
		
	};
	
	$("#equals").click(function() {
		$secondNumber = parseFloat($("#output").text());
		$value = Calculator.selectOperation($operatorSelected, $firstNumber, $secondNumber);
		displayResults($value);
		$operatorSelected = "";
	}),
	
	//view inputted numbers on screen
	$(".digit").click(function() { 
		var $outputText = $("#output").text();
		if($outputText == "0" || operatorChosen) {			//prevents leading zeroes
			displayResults("");
			$outputText = "";
			$(".operator").removeClass("operator-selected");
			operatorChosen = false;
		}
		var $thisText = $(this).text();
		if($(this).text() == "\u00B7") { 			//check to see if middle dot selected
			if($outputText.indexOf(".") === -1) {   //allows only one decimal
				displayResults($outputText + ".");
				}
		} else {
				displayResults($outputText + $thisText);
		}
	}),
	
	$(".operator").click(function() { //operators that take two numbers
		if (!operatorChosen) {
			$firstNumber = parseFloat($("#output").text());
		};
		if($operatorSelected == $(this).text()) {  //clicking on operation again cancels it
			$operatorSelected = "";
			$(this).removeClass("operator-selected");
		} else {
			$(".operator").removeClass("operator-selected");
			$operatorSelected = $(this).text();
			$(this).addClass("operator-selected");
			operatorChosen = true;
		};
	}),
	$(".immediate-operator").click(function() { //operators that take only one number
		var $number = parseFloat($("#output").text());
		var $operator = $(this).text();
		$value = Calculator.immediateOperation($operator, $number);
		displayResults($value);
	}),
	
	$("#pi").click(function() {
		displayResults("3.14159265359");
	}),

	$("#clear").click(function() {
		displayResults("0");
		operatorChosen = false;
		$(".operator").removeClass("operator-selected");
		$("#output").removeClass("too-large");
	})
});





