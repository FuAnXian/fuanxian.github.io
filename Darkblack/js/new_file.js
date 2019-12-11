window.onload = function() {

	// 隐藏导航栏
	var fiex = document.querySelector('.fiex');
	var lists = document.querySelector('.scroll').children;
	var body = document.getElementsByTagName('body')[0];

	//指定位置显示上面隐藏导航栏
	window.onscroll = function() {
		let scrollY = window.scrollY;
		// console.log(top)
		if (scrollY > 10) {
			fiex.style.display = 'block';
			average(fiex, {
				'top': '0'
			}, 5);
		} else {
			fiex.style.top = '-90px';
			fiex.style.display = 'none';
		}

		list();
		console.log(scrollY)
		if (scrollY < 800 && scrollY > 0) {
			
			lists[1].classList.add('liac');
			
		} else if (scrollY >= 800 && scrollY < 1400) {
			
			lists[2].classList.add('liac');
			
		} else if (scrollY >= 1400 && scrollY < 2300) {
			
			lists[3].classList.add('liac');
			
		} else if (scrollY >= 2300 && scrollY < 3180) {
			
			lists[4].classList.add('liac');
			
		}else if(scrollY >= 3180){
			lists[5].classList.add('liac');
		}

	}

	function list() {
		for (var i = 0; i < lists.length; i++) {
			lists[i].classList.remove('liac');
		}
	}
	//点击跳转到指定板块
	for (let i = 0; i < lists.length; i++) {
		lists[i].addEventListener('click', function() {
			switch (i) {
				case 1:
					slideTo(200)
					break;

				case 2:
					slideTo(900)
					break;

				case 3:
					slideTo(1800)
					break;

				case 4:
					slideTo(2700)
					break;

				case 5:
					slideTo(3500)
					break;

				case 0:
					slideTo(0)
					break;

			};

		})
	}

	//targetPageY 目标位置
	var timer;
	//滚动条函数
	function slideTo(targetPageY){
		clearInterval(timer);
		timer = setInterval(function() {
			var currentY = window.scrollY; //当前及滑动中任意时刻位置

			var distance = targetPageY > currentY ? targetPageY - currentY : currentY - targetPageY; //剩余距离

			var speed = Math.ceil(distance / 10); //每时刻速度

			if (currentY == targetPageY) {
				clearInterval(timer);
			} else {
				//判断目标值和当前值那个大 ? 目标值大就用当前值加速度 : 当前值大就用当前值减速度
				window.scrollTo(0, targetPageY > currentY ? currentY + speed : currentY - speed);
			}
		}, 30);

	}




	// 英雄画廊
	var contImgs = document.querySelector('.cont-img').children;
	var contDiv = document.querySelectorAll('.zhezhao');
	var show = document.getElementsByClassName("show")[0];
	var delet = document.getElementById("delet");

	// 移入显示每一个隐藏在div下的div
	for (let i = 0; i < contImgs.length; i++) {
		contImgs[i].addEventListener('mouseover', function() {
			this.style.transform = 'scale(1.08)';
			contDiv[i].style.display = 'block';

		});

		//移出恢复正常
		contImgs[i].addEventListener('mouseout', function() {
			this.style.transform = 'scale(1)';
			contDiv[i].style.display = 'none';
		})

		//点击显示隐藏div
		contDiv[i].addEventListener('click', function() {
			average(show, {
				'height': '1080'
			}, 100)
			body.style.overflow = 'hidden';
		});

		//关闭div
		delet.onclick = function() {
			show.style.height = '2px';
			body.style.overflow = 'auto';
		}
	}

	//div轮播图
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var showBox = document.querySelector('.an-img');
	var showImg = document.querySelector('.an-img').children;
	var showText = document.querySelectorAll('.body-text');
	var poyt = document.querySelector('.poyt').children;
	var items = 0;

	//切换上一张图片
	left.addEventListener('click', function() {
		up();
	})

	//切换下一张图片
	right.addEventListener('click', function() {
		next();
	})

	function next() {
		items++;
		//判断到最后一张返回第一		
		if (items > 4) {
			items = 0;
		}
		for (let i = 0; i < showImg.length; i++) {
			showImg[i].className = '';
			poyt[i].className = '';
			showText[i].classList.remove('active');
		}

		showImg[items].className = 'active';
		poyt[items].className = 'active';
		showText[items].classList.add('active');

	}

	function up() {
		items--;
		//判断到最后一张返回第一
		if (items < 0) {
			items = 4;
		}
		for (let i = 0; i < showImg.length; i++) {
			showImg[i].className = '';
			poyt[i].className = '';
			showText[i].classList.remove('active');
		}

		showImg[items].className = 'active';
		poyt[items].className = 'active';
		showText[items].classList.add('active');

	}





	//video 隐藏部分
	var play = document.getElementById("play");
	var top = document.getElementById("top");
	var bottom = document.getElementById("bottom");
	var videoBox = document.getElementById("video");
	var video = document.getElementsByTagName("video")[0];
	var lete = document.getElementById("lete");

	play.onclick = () => {
		videoBox.style.display = 'block';
		animation(top, {
			'top': '-550'
		});
		animation(bottom, {
			'bottom': '-550'
		}); 	
		video.play();
	}

	lete.onclick = () => {
		animation(top, {
			'top': '0'
		});
		animation(bottom, {
			'bottom': '0'
		});
		
		setTimeout(()=>{
		   videoBox.style.display = 'none';
		   video.pause();
		},1000)
	
	}
	console.log(video.starDate);
}
