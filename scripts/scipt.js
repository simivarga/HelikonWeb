var el = document.getElementsByClassName('room_button');
var el2 = document.getElementsByClassName('room_button_2');
var menu = document.getElementById("menu");
var list = document.getElementsByClassName("list2");
var seen = false;
menu.addEventListener("click", function(){
    if (!seen) {
        list[0].style.display = "none";
        seen = true;
    }
    else {
        list[0].style.display = "block";
        seen = false;
    }
})
for (var i=0;i<el.length; i++) {
    el[i].addEventListener("click", function myFunction(){
        window.open('https://www.booking.com/hotel/ua/otiel-gielikon.en-gb.html', '_blank');
    });
    el2[i].addEventListener("click", function myFunction(){
        window.open('https://www.booking.com/hotel/ua/otiel-gielikon.en-gb.html', '_blank');
    });
};
let languageSelector = document.querySelector('#languageSelector');
let selectedLanguage = "UA";
/* languageSelector.addEventListener('change', function() {
    selectedLanguage = this.value;
}); */