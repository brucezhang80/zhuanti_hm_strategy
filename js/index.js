$(document).ready(function(){
	var centerImageWidth = 981;
	makeIntroduction();
	
	function makeIntroduction(){
		var divWidth = ($(window).width()-centerImageWidth)/2 + 20;
		$("#introduction .back").width(divWidth);
	}
	
	$(window).resize(function(){
		
		makeIntroduction();
	});
	
	
	$(".nav .btn a").click(function(){
		var page = $(this).attr("page");
		
		$(".nav .btn a").removeClass("on");
		$(".nav .btn a[page='"+page+"']").addClass("on");
		
		$(".bigContent").hide();
		$("#content"+page).show();
		
		if(page>=4){
			$("#nav").addClass("nav2");
		}
		else{
			$("#nav").removeClass("nav2");
		}
		
	})
	

		
		$(window).scroll(function () {
			var nowScroll,scroll_1 = 300; //滚动到600像素时显示
			var scroll_2 = 850;
			nowScroll = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
				console.log(nowScroll);
			if (nowScroll >= scroll_1) {
				showdiv("#floatbar");
				if(nowScroll >= scroll_2){
					showdiv(".nav3");
				}
				else hidediv(".nav3");
			}
			else{
				hidediv("#floatbar,.nav3");
			}
		});

		function showdiv(div) {
			$(div).show();
		}
		function hidediv(div) {
			$(div).hide();
		}


});

