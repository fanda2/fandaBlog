var OriginTitile = document.title, titleTime
		document.addEventListener('visibilitychange', function() {undefined
		    if (document.hidden) {//如果切换到其他页面
		        document.title = '你别走，快回来！';
		        clearTimeout(titleTime);
		    } else {//处在当前的页面
		        document.title = '你终于回来啦';
		        titleTime = setTimeout(function() {undefined
		            document.title = OriginTitile;
		        },2000);
		    }
		});
		
var list=document.getElementsByTagName("li");
for(var i=0;i<list.length;i++)
{
	console.log("111");
}