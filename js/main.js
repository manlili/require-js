require.config({
	paths: {
		"jquery": "helper/jquery",
		"math":"helper/math"
	}
});
require(["jquery","math"],function ($,math) {
	$(".box").css("color","red");
	alert(math.add(1,2));
})