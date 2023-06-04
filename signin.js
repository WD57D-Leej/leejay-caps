
function closeModal() {
    let modalElements = document.getElementsByClassName("active");
    for (let i = 0; i < modalElements.length; i++) {
      modalElements[i].classList.remove("active");
    }
  } 
  let closeButtons = document.getElementsByClassName("close-button");
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", closeModal);
  }

function addActiveClass(elementId, className) {
    document.getElementById(elementId).addEventListener("click", function() {
      document.getElementsByClassName(className)[0].classList.add("active");
    });
  
    if (elementId === "modal-signup-login-botton") {
      document.getElementById(elementId).addEventListener("click", function() {
        document.getElementsByClassName("log-in-pop-up")[0].classList.add("active")
        document.getElementsByClassName("register-popup-section")[0].classList.remove("active");
        ;
      });
    }
  
    if (elementId === "button-create-new-account") {
      document.getElementById(elementId).addEventListener("click", function() {
        document.getElementsByClassName("register-popup-section")[0].classList.add("active");
        document.getElementsByClassName("log-in-pop-up")[0].classList.remove("active");
       
      });
    }
    if (elementId === "forgotpass-click") {
        document.getElementById(elementId).addEventListener("click", function(){
            document.getElementsByClassName("forgotpass-background-popup")[0].classList.add("active");
            document.getElementsByClassName("log-in-pop-up")[0].classList.remove("active");
        });
    }
  }
  
  addActiveClass("main-page-sign-up", "register-popup-section");
  addActiveClass("main-page-signin", "log-in-pop-up");
  addActiveClass("modal-signup-login-botton", "log-in-pop-up");
  addActiveClass("button-create-new-account", "register-popup-section");
  addActiveClass("forgotpass-click", "forgotpass-background-popup");
  