function mainFunction()
{
    window.onscroll = function()
    {
        var banner = document.querySelector('.header-background.img');
        var nav =  document.getElementById('navigation');
        banner.style.backgroundPosition = '0 '+(-window.pageYOffset/5)+'px';
        if(pageYOffset >= 150) {
            nav.style.padding = '0px';
        }else if(pageYOffset < 150){
            nav.style.padding = '15px';
        }
    }
}

window.addEventListener('load', mainFunction, false);
