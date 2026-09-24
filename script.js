
// MUDE A DATA AQUI
// Formato: ANO-MES-DIA

const dataEspecial = new Date("2026-05-06T00:00:00");

// FOTO

const seletorFoto = document.getElementById("seletorFoto");
const foto = document.getElementById("foto");
const placeholder = document.getElementById("placeholder");

seletorFoto.addEventListener("change", function () {
  const arquivo = this.files && this.files[0];

  if (!arquivo) return;

  foto.src = URL.createObjectURL(arquivo);
  foto.style.display = "block";
  placeholder.style.display = "none";
});

// CONTADOR

function atualizarContador() {
  const agora = new Date();

  let anos =
    agora.getFullYear() - dataEspecial.getFullYear();

  let meses =
    agora.getMonth() - dataEspecial.getMonth();

  let dias =
    agora.getDate() - dataEspecial.getDate();

  if (dias < 0) {
    meses--;

    dias += new Date(
      agora.getFullYear(),
      agora.getMonth(),
      0
    ).getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  if (agora < dataEspecial) {
    document.getElementById("tempo").textContent =
      "em breve 💗";
  } else {
    document.getElementById("tempo").textContent =
      `${anos} ano(s), ${meses} mês(es) e ${dias} dia(s)`;
  }
}

atualizarContador();

setInterval(atualizarContador, 60000);

// BOTAO SURPRESA

document.getElementById("botaoSurpresa")
  .addEventListener("click", () => {

    const resposta = document.getElementById("resposta");

    resposta.style.display =
      resposta.style.display === "block"
        ? "none"
        : "block";

  });

// CORACOES FLUTUANTES

function criarCoracao() {
  const coracao = document.createElement("div");

  coracao.className = "coracao";

  coracao.textContent =
    Math.random() > 0.5 ? "♥" : "♡";

  coracao.style.left =
    Math.random() * 100 + "vw";

  coracao.style.fontSize =
    (14 + Math.random() * 22) + "px";

  coracao.style.animationDuration =
    (5 + Math.random() * 5) + "s";

  document.body.appendChild(coracao);

  setTimeout(() => coracao.remove(), 10000);
}

setInterval(criarCoracao, 650);