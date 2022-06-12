//variaveis de contagem da direção

var num = 150;
var num2 = 150;

//slide do botão direito

var btnRight = document.getElementById('btnright');

btnRight.addEventListener('click', () => {

    var limi = document.getElementById('limitador').getBoundingClientRect().left;

    var limit = Math.round(limi);

    var er = document.getElementById('btnright').getBoundingClientRect().left;

    var ref = Math.round(er);

    var slidehorizontalScroll = document.getElementById('horizontalScroll');

    var carrossel = document.getElementById('carrossel');


    if (limit > ref) {

        slidehorizontalScroll.style.transform = 'translateX(-' + num + 'px)';

        num = num + 150;

        num2 = num2 - 150;

    } else {

        var stoped = ref * slidehorizontalScroll.clientWidth / carrossel.clientWidth - carrossel.clientWidth + 100;

        var stopedRound = Mtah.round(stoped);

        slidehorizontalScroll.style.transform = 'translateX(-' + stopedRound + 'px)';


    }


});


//slide botão esquerdo

var btnLeft = document.getElementById('btnleft');

btnLeft.addEventListener('click', () => {


    var limi = document.getElementById('limitador').getBoundingClientRect().left;

    var limit = Math.round(limi);

    var er = document.getElementById('btnleft').getBoundingClientRect().left;

    var ref = Math.round(er);

    var slidehorizontalScroll = document.getElementById('horizontalScroll');

    var carrossel = document.getElementById('carrsossel');

    var slide = slidehorizontalScroll.getBoundingClientRect().left;

    if (slide < ref) {

        slidehorizontalScroll.style.transform = 'translateX(' + num2 + 'px)';

        num = num - 150;
        num2 = num2 + 150;

    } else {

        slidehorizontalScroll.style.transform = 'translateX(0)';

        num = 150;

    }


});