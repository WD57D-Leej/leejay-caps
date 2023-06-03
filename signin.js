document.getElementById("main-page-sign-up").addEventListener("click", function(){
    document.getElementsByClassName("register-popup-section")[0].classList.add("active");
})

document.getElementById("close-Button").addEventListener("click", function(){
    document.getElementsByClassName("register-popup-section")[0].classList.remove("active");
})