
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', ()=>{

    navbarLinks.classList.toggle('active');

});

// When clicking on a navbar link it should change its color 

$("a").click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
 });