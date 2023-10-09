function dark() {
    var element = document.body;
    var element2 = document.getElementById("card1");
    var element3 = document.getElementById("card2");
    var element4 = document.getElementById("card3");
    var btn = document.getElementById("btn1");
    var btn = document.getElementById("btn2");
    var btn = document.getElementById("btn3");
    element.classList.toggle("dark-mode");
    element2.classList.toggle("card-dark");
    element3.classList.toggle("card-dark");
    element4.classList.toggle("card-dark");
    btn1.classList.toggle("btn-dark");
    btn2.classList.toggle("btn-dark");
    btn3.classList.toggle("btn-dark");
 }