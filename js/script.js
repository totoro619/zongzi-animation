/*获取DOM对象*/
var g = function(id){
	return document.getElementById(id);
}

/*时间轴对象构造器*/
var Timeline = function(){
	this.order = []; //动画序列
	this.add = function( time, func, log){
		this.order.push({
			time : time,
			func : func,
			log : log,
		});
	}

	//参数ff支持快进
	this.start = function( ff ){
		for ( s in this.order)

			(function( me ){
				var time = me.time;
				var fn = me.func;
				var log = me.log;

				time = Math.max(time - (ff||0),0);
				setTimeout(fn,time);
				setTimeout(function(){
					console.log('time:',time,'log:',log);
				},time)
			})(this.order[s])

	}
}


// 初始的场景
var s1 = new Timeline ();
// 粽子展开的场景
var s2 = new Timeline();
// 粽子旋转的场景
var s3 = new Timeline();
// 粽子肉垂直翻转的场景
var s4 = new Timeline();


s1.add (1,function(){
		g('c_zongzi_box').className ="c_zongzi_box c_zongzi_boxrock";
		g('c_shengzi').onclick = function(){
			s2.start();
		}
	});
s1.start();

s2.add (1,function(){
	g('c_zongzi_box').className ="c_zongzi_box";
	g('text').className ="text text_In";
})
s2.add (100,function(){
	g('c_shengzi').className ="c_shengzi_2";

})
s2.add (400,function(){
	g('c_shengzi').className ="c_shengzi_3";

})
s2.add (700,function(){
	g('c_shengzi').className ="c_shengzi_4";

})
s2.add (1000,function(){
	g('c_shengzi').className ="c_shengzi_0";

})
s2.add (2000,function(){
	g('c_zongzi').className ="c_zongzi c_zongzi_Out";
	g('c_zzr').className ="c_zzr c_zzr_In";
	g('c_left').className ="c_left c_left_In";
	g('c_right').className ="c_right c_right_In";
	g('c_t1').className ="c_t1 c_t_In";
	g('c_t2').className ="c_t2 c_t_mirror1";
})
s2.add (3000,function(){
	g('c_left').className ="c_left c_left_In c_left_Out";
	g('c_right').className ="c_right c_right_In c_right_Out";
	g('c_expand').className ="c_expand c_expand_In ";
	s3.start();
})

// 粽子肉托盘旋转动画
s3.add(1,function(){
	g('c_t1').onclick = function(){
		s4.start();
	}
})
s3.add(1000,function(){
	g('c_zzr').className = 'c_zzr c_zzr_In c_zzr_view2';
	g('c_t1').className = 'c_t1 c_t_In c_t_view2';
	g('c_t2').className = 'c_t2 c_t_In c_t_mirror4';
})
s3.add(1500,function(){
	g('c_zzr').className = 'c_zzr c_zzr_In c_zzr_view3';
	g('c_t1').className = 'c_t1 c_t_In c_t_view3';
	g('c_t2').className = 'c_t2 c_t_In c_t_mirror3';
})
s3.add(2000,function(){
	g('c_zzr').className = 'c_zzr c_zzr_In c_zzr_view4';
	g('c_t1').className = 'c_t1 c_t_In c_t_view4';
	g('c_t2').className = 'c_t2 c_t_In c_t_mirror2';
})
s3.add(2500,function(){
	g('c_zzr').className = 'c_zzr c_zzr_In c_zzr_view0';
	g('c_t1').className = 'c_t1 c_t_In c_t_mirror1';
	g('c_t2').className = 'c_t2 c_t_In c_t_view1';
})
s3.add(3500,function(){
	g('c_zzr').className = 'c_zzr c_zzr_In c_zzr_view4';
	g('c_t1').className = 'c_t1 c_t_In c_t_view4';
	g('c_t2').className = 'c_t2 c_t_In c_t_mirror2';
})
s3.add(4000,function(){
	g('c_zzr').className = 'c_zzr c_zzr_In c_zzr_view3';
	g('c_t1').className = 'c_t1 c_t_In c_t_view3';
	g('c_t2').className = 'c_t2 c_t_In c_t_mirror3';
})
s3.add(4500,function(){
	g('c_zzr').className = 'c_zzr c_zzr_In c_zzr_view2';
	g('c_t1').className = 'c_t1 c_t_In c_t_view2';
	g('c_t2').className = 'c_t2 c_t_In c_t_mirror4';
})
s3.add(5000,function(){
	g('c_zzr').className = 'c_zzr c_zzr_In c_zzr_view1';
	g('c_t1').className = 'c_t1 c_t_In c_t_view1';
	g('c_t2').className = 'c_t2 c_t_In c_t_mirror1';
})



// 粽子肉垂直翻转
s4.add(1000,function(){
	g('c_zzr').className = 'c_zzr c_zzr_vertical01';	
	g('c_zzr2').className = 'c_zzr c_zzr_vertical1';	
})
s4.add(1500,function(){
	g('c_zzr').className = 'c_zzr c_zzr_vertical02';	
	g('c_zzr2').className = 'c_zzr c_zzr_vertical2';	
})
s4.add(2000,function(){
	g('c_zzr').className = 'c_zzr c_zzr_vertical03';	
	g('c_zzr2').className = 'c_zzr c_zzr_vertical3';	
})
s4.add(2500,function(){
	g('c_zzr').className = 'c_zzr c_zzr_vertical04';	
	g('c_zzr2').className = 'c_zzr c_zzr_vertical4';	
})
s4.add(3000,function(){
	g('c_zzr').className = 'c_zzr c_zzr_vertical03';	
	g('c_zzr2').className = 'c_zzr c_zzr_vertical3';	
})
s4.add(3500,function(){
	g('c_zzr').className = 'c_zzr c_zzr_vertical02';	
	g('c_zzr2').className = 'c_zzr c_zzr_vertical2';	
})
s4.add(4000,function(){
	g('c_zzr').className = 'c_zzr c_zzr_vertical01';	
	g('c_zzr2').className = 'c_zzr c_zzr_vertical1';	
})
s4.add(4500,function(){
	g('c_zzr').className = 'c_zzr c_zzr_vertical05';	
	g('c_zzr2').className = 'c_zzr c_zzr_vertical5';	
})
s4.add(5500,function(){
	s3.start();
})



// 图片加载器
var imgs = ['img/zzr_2.png','img/zzr_3.png','img/zzr_4.png'];
var imgs_onload = function(){
	imgs.pop();
	if (imgs.length == 0) {
		s1.start()
	}
}
for (s in imgs) {
		var img = new Image;
		img_onload = imgs_onload;
		img.src = imgs[s];
	}
