window.onload = function cleanScrollButton(){
    document.getElementById("buttonUp").style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

document.getElementById("buttonUp").onclick = function scrollUpFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onscroll =  function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
        document.getElementById("buttonUp").style.display = "block";
    }
        
    else{
        document.getElementById("buttonUp").style.display = "none";
    }
}









    document.querySelector('.menu').onmouseover = menuShow;
    document.querySelector('.menu').onmouseout = menuHide;
    document.querySelector('.menu1').onmouseover = menuShow1;
    document.querySelector('.menu1').onmouseout = menuHide1;
    document.querySelector('.menu2').onmouseover = menuShow2;
    document.querySelector('.menu2').onmouseout = menuHide2;



    document.onkeydown = function(event){
        // console.log (event);
        if (event.code == 'KeyM') menuShow();
        if (event.code == 'Escape') menuHide();


    }

    function menuShow(){
        document.querySelector (".menu").style.left = 0;
      /*  var element = document.getElementById('calculate');
        element.style.opacity = "0.1";
        var element2 = document.getElementById('c1');
        element2.style.opacity = "0.1";*/
      
        

    }
    function menuHide() {
        document.querySelector (".menu").style.left = "-440px";
        /*var element = document.getElementById('calculate');
        element.style.opacity = "1";
        var element2 = document.getElementById('c1');
        element2.style.opacity = "1";*/
     
    }
    function menuShow1(){
        document.querySelector (".menu1").style.left = 0;
       /* var element = document.getElementById('calculate');
        element.style.opacity = "0.1";
        var element2 = document.getElementById('c1');
        element2.style.opacity = "0.1"; */
      
        

    }
    function menuHide1() {
        document.querySelector (".menu1").style.left = "-240px";
       /* var element = document.getElementById('calculate');
        element.style.opacity = "1";
        var element2 = document.getElementById('c1');
        element2.style.opacity = "1";*/
     
    }
    function menuShow2(){
        document.querySelector (".menu2").style.left = 0;
       /* var element = document.getElementById('calculate');
        element.style.opacity = "0.1";
        var element2 = document.getElementById('c1');
        element2.style.opacity = "0.1"; */
      
        

    }
    function menuHide2() {
        document.querySelector (".menu2").style.left = "-330px";
      /*  var element = document.getElementById('calculate');
        element.style.opacity = "1";
        var element2 = document.getElementById('c1');
        element2.style.opacity = "1";*/
     
    }
}
function scrollToGraph(){
    let calculatorHead = document.getElementById("calculate").clientHeight;
    document.body.scroll = calculatorHead + 20;
     document.documentElement.scrollTop = calculatorHead + 20; 
 }
