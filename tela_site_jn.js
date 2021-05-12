var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("sub_header").style.top = "158px" // valor do tamanho do sub-header
    document.querySelector(".site-branding").style.height = "110px"; //valor do tamanho da logo grande
  } else {
    document.getElementById("sub_header").style.top = "-158px"
    document.querySelector(".site-branding").style.height = "60px";
  }
  prevScrollpos = currentScrollPos;
}

function modo_escuro(){
  let corFundo = document.querySelector('body')
  console.log(corFundo.classList)
  if (document.querySelector('body').classList.contains('nightmode')){
    document.querySelector('body').classList.remove('nightmode');
  } else {
    document.querySelector('body').classList.add('nightmode')
  }
}

document.getElementById("claro").addEventListener("click", function(){
  modo_escuro()
})











//var site_branding = document.querySelector(".site-brandin")
//site_branding.style.height = "80px"


/* consigo alterar o tamanho do header todo apenas alterando o tamanho da logo
dessa forma, posso jogar a o comando na mesma função de esconder o sub-header

let fundoTela = document.getElementsByClassName("nightmode").style.backgroundColor;
  if (fundoTela.style == document.getElementsByClassName("nightmode")){
    document.querySelector('.nightmode').style.backgroundColor;
  } else {
    document.querySelector('body').classList.remove('nightmode');
  }


*/


/*   body.scroll .header-menu>.wrapper>.site-branding {
      min-width: 98px;
      width: 98px;
      height: 60px;
} */
