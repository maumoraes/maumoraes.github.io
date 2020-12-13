let selected = false;

const isEmpty = (value) => {
  if (value) {
    ga('send', 'event', 'contato', id.slice(1), 'preencheu')
  }
}

const isSelected = (id) => {
  if (!selected) {
    selected = true;
    ga('send', 'event', 'contato', id.slice(1), 'preencheu')
  } else {
    selected = false;
  }
}

document.querySelector("#nome").addEventListener("blur", (e) => {
  isEmpty(e.target.value)
})

document.querySelector("#email").addEventListener("blur", (e) => {
  isEmpty(e.target.value)
})

document.querySelector("#telefone").addEventListener("blur", (e) => {
  isEmpty(e.target.value)
})

document.querySelector("#aceito").addEventListener("change", (e) => {
  isSelected("#aceito");
})

console.log(document.querySelector("#nome"))

// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
//
// (function (i, s, o, g, r, a, m) {
//   i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
//     (i[r].q = i[r].q || []).push(arguments)
//   }, i[r].l = 1 * new Date(); a = s.createElement(o),
//     m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
// })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

var form = document.getElementById('form_contato');

form.addEventListener('submit', function(event) {

  ga('send', 'event', 'contato', 'enviado', 'enviado')});