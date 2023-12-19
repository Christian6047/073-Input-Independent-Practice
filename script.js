 $("button").click(function() {
	var favfood = $(".user").val();
	$(".vote-result").text(favfood);
     $("img").show();
     console.log("your favorite food is " + favfood);
     
     var favsnack = $(".snack").val();
	$(".vote-result").text("you like "+ favfood +  " for food, and "+ favsnack + " for snacking.");
     $("img").show();
     console.log("your favorite snack is " + favsnack);

});
$("button").click(function() {
alert("thanks for voting");
});




