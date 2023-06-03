
document.getElementById("main-page-sign-up").addEventListener("click", function(){
    document.getElementsByClassName("register-popup-section")[0].classList.add("active");
}) //button in the landingpage = sign up

document.getElementById("main-page-signin").addEventListener("click", function(){
    document.getElementsByClassName("log-in-pop-up")[0].classList.add("active");
}) //button in the landingpage = sign in

document.getElementById("close-Button").addEventListener("click", function(){
    document.getElementsByClassName("register-popup-section")[0].classList.remove("active");
}) //close button in the modal

document.getElementById("modal-signup-login-botton").addEventListener("click", function(){
    document.getElementsByClassName("log-in-pop-up")[0].classList.add("active");
    document.getElementsByClassName("register-popup-section")[0].classList.remove("active");
}) //button clicking login = lower part

document.getElementById("button-create-new-account").addEventListener("click", function(){
    document.getElementsByClassName("register-popup-section")[0].classList.add("active");
    document.getElementsByClassName("log-in-pop-up")[0].classList.remove("active");
}) //button on modal log in page

