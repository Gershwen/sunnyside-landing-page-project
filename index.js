
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', ()=>{

    navbarLinks.classList.toggle('active');

});

// when clicking the hamburger menu the down arrow svg should disappear



// When clicking on a navbar link it should change its color 

$("a").click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
 });