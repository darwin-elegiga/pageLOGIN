const contenedor__login_register = document.querySelector(".contenedor__login-register");
const form__login = document.querySelector(".form__login");
const form__register = document.querySelector(".form__register");

const caja__trasera_login = document.querySelector(".caja__trasera-login");
const caja__trasera_register = document.querySelector(".caja__trasera-register");
const caja__trasera = document.querySelector(".caja__trasera");

const button_login = document.getElementById("button-login");
const button_register = document.getElementById("button-register");


button_login.addEventListener("click", login);
button_register.addEventListener("click", register);



function register(){
    if(window.innerWidth > 800){
        form__register.style.display = "block";
        form__login.style.display = "none";
        contenedor__login_register.style.left = "31em";
        caja__trasera_register.style.opacity= "0";
        caja__trasera_login.style.opacity= "1";
    }
    else{
        form__register.style.display = "block";
        form__login.style.display = "none";
        caja__trasera_register.style.display= "none";
        caja__trasera_login.style.display= "block";
        contenedor__login_register.style.top = "-300px";
        caja__trasera.style.top = "380px";
       


    }

}    

function login(){
    if(window.innerWidth > 800){ 
        form__login.style.display = "block";
        form__register.style.display = "none";
        contenedor__login_register.style.left = "1vw";
        caja__trasera_register.style.opacity= "1";
        caja__trasera_login.style.opacity= "0";
    }  
    else{
        form__register.style.display = "none";
        form__login.style.display = "block";
        caja__trasera_register.style.display= "block";
        caja__trasera_login.style.display= "none";

        contenedor__login_register.style.top = "-50px";
        caja__trasera.style.top = "0";
        

    }
  
}    

// let wpage = window.innerWidth;

// window.addEventListener("", () =>{
//         if( wpage > 800 && window.innerWidth < wpage && window.innerWidth < 800){
//             location.reload();
//         }
// });

