//右边导航的函数
function goHome(){
	if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
		// $("#nav_right_one").style.display="block";
		$("#nav_right_one").css({
			"display":"block"
		})
	}else{
		// $("#nav_right_one").style.display="none";
		$("#nav_right_one").css({
			"display":"none"
		})
	}	
}
function huiD(){	//回到顶部
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}

//点击楼层效果
function dianJ() {
	$(".lou_righr_a").click(function(){
		$(".lou_righr_a").css({
			color:"white",
			background:"#FA2960"
		})
			$(this).css({
				color:"red",
				background:"white"
			});
			
		})
}




//楼层效果固定

// $(function(){
// 	$(".lou_righr_a").scroll(function(event){
		
// 		$(".lou_righr_a").scrollTop(1000);
		
// 	});
// })

// $.fn.silde = function() {
// 	var position = function(element) {
// 	var top = element.position().top, pos = element.css("position");
// 	$(window).scroll(function() {
// 	var scrolls = $(this).scrollTop();
// 	if (scrolls > top) {
// 		if (window.XMLHttpRequest) {
// 		element.css({
// 		position: "fixed",
// 		top: 0,
// 		left:1080,
// 		"margin-left":"0px",

// 		}); 
// 	}else {
// 	element.css({
// 	position: pos,
// 	top: top,
// 	"margin-left":"20px"
// 	}); 
// 	}
// 	});
// 	};
// 	return $(this).each(function() {
// 	position($(this)); 
	 
// 	});
// 	};
// 	$(".lou_righr_a").silde();