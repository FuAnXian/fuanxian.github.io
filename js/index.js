window.onload = function () {
    const memu = document.querySelector('.memu');
    const memuList = document.querySelector('.memuList');
    let play = true;
	
	//手机菜单
    memu.onclick = function () {
        if (play) {
            this.style.color = '#f7a904';
            memuList.classList.add('active');
            play = false;
        } else {
            this.style.color = '#fff';
            memuList.classList.remove('active');
            play = true;
        }

    }


    //  地区轮播
    let maxLeft = document.querySelector('.maxLeft'),
        maxRight = document.querySelector('.maxRight'),
        max = document.querySelector('.maxMax'),
        maxDiv = max.querySelector('.maxDiv'),
        areaMax = document.querySelector('.areaMax'),
        fdd = document.querySelectorAll('.fdd');
        items = 1,
        time = null,
        lol = true,
        wid = maxDiv.offsetWidth;
  max.style.transform = "translateX(" + (-wid * items) + "px)";
    var width = document.body.clientWidth;
    // 改变浏览器大小事件      
    window.onresize = function () {
        wid = maxDiv.offsetWidth;
        max.style.transform = "translateX(" + (-wid * items) + "px)";
        width = document.body.clientWidth;
        console.log(fdd, width)

    }

    time = setInterval(animtaion, 4000)

    areaMax.onmouseout = function () {
        time = setInterval(animtaion, 4000)
    }


    areaMax.onmouseover = function () {
        clearInterval(time);
    }


    maxRight.addEventListener('click', function () {
        animtaion();

    })

    maxLeft.addEventListener('click', function () {
        //规定0.8s以后才可以在次点击
        if (lol) {
            items--;
            auto();
            max.style.transform = "translateX(" + (-wid * items) + "px)";
            lol = false;

            setTimeout(function () {
                lol = true;
            }, 815)
        }

    })

    function animtaion() {
        if (lol) {
            items++;
            auto();
            max.style.transform = "translateX(" + (-wid * items) + "px)";
            lol = false;
            setTimeout(function () {
                lol = true;
            }, 815)
        }
    }



    function auto() {

        // 判断最后一张先取消过度效果 在马上跳回第一张 10毫秒之后重新赋值items 和添加过度效果
        setTimeout(function () {
            if (items >= 5) {
                max.style.transition = 'none';
                max.style.transform = "translateX(" + (-wid) + "px)";

                setTimeout(function () {
                    max.style.transition = 'all 0.8s ease-in-out';
                    items = 1;
                }, 15);

            } else if (items <= 0) {

                max.style.transition = 'none';
                max.style.transform = "translateX(" + (-wid * 4) + "px)";

                setTimeout(function () {
                    max.style.transition = 'all 0.8s ease-in-out';
                    items = 4;
                }, 15);

            }

        }, 800)
    }


    let Ul = document.querySelector('.listUl');
    let baiSe = Ul.getElementsByTagName('a');

    for (var i = 0; i < baiSe.length; i++) {
        if (i === 0) {
            baiSe[i].className = 'white';
        }

        baiSe[i].setAttribute('idx', i);

        baiSe[i].onclick = function () {
            var idx = this.getAttribute('idx');
            for (var j = 0; j < baiSe.length; j++) {
                if (j == idx) {
                    baiSe[j].className = 'white';
                } else {
                    baiSe[j].className = '';
                }
            }
        }
    }


}