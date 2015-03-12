function mainFunction()
{
    window.onscroll = function()
    {
        var banner = document.querySelector('.header-background.img');
        var nav =  document.getElementById('navigation');
        var navContain = document.getElementById('nav-contain');
        banner.style.backgroundPosition = '0 '+(-window.pageYOffset/5)+'px';
        if(pageYOffset >= 95) {
            nav.style.padding = '0px';
            navContain.style.backgroundColor = 'rgba(43, 87, 151, 1)';
        }else if(pageYOffset < 95){
            nav.style.padding = '15px';
            navContain.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        }
    }
}

window.addEventListener('load', mainFunction, false);
