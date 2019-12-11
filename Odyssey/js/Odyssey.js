window.onload = function () {

    var lols = document.querySelector('.lol').children;
    var yxzj = document.getElementById('yxzj');
    var song = document.getElementById('song');
    var conts = document.querySelectorAll('.root_20j');
    var show = document.getElementById('show');
    var hide = document.getElementById('hide');

    for (let i = 0; i < lols.length; i++) {

        lols[i].onclick = function () {
            clear();

        //     switch (i) {
        //         case 1:
        //             conts[i].style.background = 'url(../images/odyssey-splash-cropped-jinx.png) no-repeat';
        //             break;

        //         case 2:
        //             conts[i].style.background = 'url(../images/odyssey-splash-cropped-ziggs.png) no-repeat';
        //             break;

        //         case 3:
        //             conts[i].style.background = 'url(../images/odyssey-splash-cropped-sona.png) no-repeat';
        //             break;

        //         case 4:
        //             conts[i].style.background = 'url(../images/odyssey-splash-cropped-malphite.png) no-repeat';
        //             break;

        //         case 5:
        //             conts[i].style.background = 'url(../images/odyssey-splash-cropped-kayn.png) no-repeat';
        //             break;

        //         case 6:
        //             conts[i].style.background = 'url(../images/odyssey-splash-cropped-zed.png) no-repeat';
        //             break;

        //         case 0:
        //             conts[i].style.background = 'url(../images/odyssey-splash-cropped-yasuo.png) no-repeat';
        //             break;
        //     }
        //    conts[i].style.backgroundPosition = '0 50%';
            conts[i].style.display = 'block';
            lols[i].classList.add('active');
        }

    }


    song.onclick = function () {
        song.className = '';
        yxzj.className = 'active';
        hide.style.display = 'block';
        show.style.display = 'none';
    }

    yxzj.onclick = function () {
        yxzj.className = '';
        song.className = 'active';
        hide.style.display = 'none';
        show.style.display = 'block';
    }


    function clear() {
        for (var j = 0; j < conts.length; j++) {
            lols[j].classList.remove('active');
            conts[j].style.display = 'none';
        }
    }



    // 点击大图
    var imgIs = document.querySelector('.imgIs');
    var jinx = document.querySelector('.root_TD').children;
    var dele = document.getElementById('dele');
    var img = document.getElementById('img');
    var body = document.querySelector('body');

    for (var i = 0; i < jinx.length; i++) {
        jinx[i].p = i;

        jinx[i].addEventListener('click', function () {
            imgIs.style.display = 'block';
            body.style.overflow = 'hidden';
            var num = this.p;
            console.log(num);
            switch (num) {
                case 0:
                    img.src = '../images/odyssey-splash-jinx.jpg';
                    break;

                case 1:
                    img.src = '../images/odyssey-splash-yasuo.jpg';
                    break;

                case 2:
                    img.src = '../images/odyssey-splash-ziggs.jpg';
                    break;

                case 3:
                    img.src = '../images/odyssey-splash-sona.jpg';
                    break;

                case 4:
                    img.src = '../images/odyssey-splash-kayn.jpg';
                    break;
                case 5:
                    img.src = '../images/odyssey-splash-malphite.jpg';
                    break;
                case 6:
                    img.src = '../images/odyssey-splash.jpg';
                    break;
                case 7:
                    img.src = '../images/odyssey-alien-plants.jpg';
                    break;
                case 8:
                    img.src = '../images/odyssey-animatic-01.jpg';
                    break;
                case 9:
                    img.src = '../images/odyssey-animatic-02.jpg';
                    break;
            }


        })
    }

    dele.onclick = function () {
        imgIs.style.display = 'none';
        body.style.overflow = 'auto';
    }
}