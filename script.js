const emojis = ["🩺","👩‍⚕️","👨‍⚕️","🧑‍⚕️","💉","💊","🩹","🏥","🫀","🧬","🔬","🚑","⚕️","🦷","🧪","💙"];
const lluvia  = document.getElementById("lluvia");
const fondo   = document.getElementById("fondo");
const inicio  = document.getElementById("inicio");
const mensaje = document.getElementById("mensaje");

function soltarEmoji() {
  const e = document.createElement("span");
  e.className = "gota";
  e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  e.style.left = Math.random() * 100 + "vw";
  e.style.fontSize = (1.2 + Math.random() * 2.2) + "rem";
  e.style.animationDuration = (4 + Math.random() * 5) + "s";
  e.style.opacity = (0.55 + Math.random() * 0.45).toFixed(2);
  e.style.setProperty("--giro", (Math.random() > .5 ? 1 : -1) * (120 + Math.random() * 360) + "deg");
  lluvia.appendChild(e);
  e.addEventListener("animationend", () => e.remove());
}

// La lluvia empieza desde que se abre la página (pantalla del CLICK)
for (let i = 0; i < 30; i++) setTimeout(soltarEmoji, i * 80);
setInterval(soltarEmoji, 280);

// Al darle CLICK: el fondo blanco se desvanece al negro azulado y aparece el mensaje
document.getElementById("btn-click").addEventListener("click", () => {
  fondo.classList.add("oscuro");      // fondo se oscurece poco a poco
  inicio.classList.add("saliendo");   // desaparece el botón

  setTimeout(() => {
    inicio.style.display = "none";
    mensaje.classList.add("visible");
    window.scrollTo(0, 0);
  }, 700);

  // Explosión extra de emojis
  for (let i = 0; i < 40; i++) setTimeout(soltarEmoji, i * 50);
});