$(document).ready(function(){
        
    $(".menu-mobile").click(function(){
        $('.menu').slideToggle(); 
    });
    
    $(".banner .content").cycle().reload();
});