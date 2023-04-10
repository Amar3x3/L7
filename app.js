const nav = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

    toggleMenu.addEventListener('click', () =>{
        nav.classList.toggle('show')
    })
    closeMenu.addEventListener('click', () =>{
        nav.classList.remove('show')
    })

window.addEventListener('scroll', reveal);
window.addEventListener('scroll', reveal_absolute);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var  i=0; i<reveals.length; i++){
        var windowheight= window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');

        }
        else{
            reveals[i].classList.remove('active');
        }

    }
}
function reveal_absolute(){
    var reveals1 = document.querySelectorAll('.reveal_absolute');

    for (var  i=0; i<reveals1.length; i++){
        var windowheight1= window.innerHeight;
        var revealtop1 = reveals1[i].getBoundingClientRect().top;
        var revealpoint1 = 100;

        if(revealtop1 < windowheight1 - revealpoint1){
            reveals1[i].classList.add('active_absolute_div');

        }
        else{
            reveals1[i].classList.remove('active_absolute_div');
        }

    }
}
