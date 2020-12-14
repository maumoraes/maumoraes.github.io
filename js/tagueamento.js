// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

let selected = false;

const isEmpty = (value, id) => {
  if (value) {
    ga('send', 'event', 'contato', id, 'preencheu')
  }
}

const isSelected = (id) => {
  if (!selected) {
    selected = true;
    ga('send', 'event', 'contato', id, 'preencheu')
  } else {
    selected = false;
  }
}

document.querySelector("#nome").addEventListener("blur", (e) => {
  isEmpty(e.target.value, "nome")
})

document.querySelector("#email").addEventListener("blur", (e) => {
  isEmpty(e.target.value, "email")
})

document.querySelector("#telefone").addEventListener("blur", (e) => {
  isEmpty(e.target.value, "telefone")
})

document.querySelector("#aceito").addEventListener("change", (e) => {
  isSelected("aceito");
})

console.log(document.querySelector("#nome"))

var form = document.getElementById('form_contato');

form.addEventListener('submit', function(event) {

  ga('send', 'event', 'contato', 'enviado', 'enviado')});
