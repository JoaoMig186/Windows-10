var menu = document.getElementById("menu")

function AbrirEfecharMenu(){
    var botaoMenu = document.getElementById("iconesLogo")

    botaoMenu.addEventListener("click",()=>{
        if(menu.style.display == "none") {
            menu.setAttribute("style", "display:flex");
            console.log("fechaaaaaaaaa");
        }else {
            menu.setAttribute("style", "display:none");
            console.log("abriiiiiiii");
        }
})
}

function Recarregar(){
    var botao = document.getElementById("recarregar");

    botao.addEventListener("click", ()=> {
        window.location.reload(true);
    })
}

AbrirEfecharMenu();
Recarregar();
