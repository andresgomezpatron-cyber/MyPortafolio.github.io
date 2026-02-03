// Menú hamburguesa para móviles
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Crear símbolos de código para el fondo
const fondo = document.getElementById('fondoCodigo');
const simbolos = ['{}', '()', '[]', '</>', ';', '=>', '===', '{}', '()', '/*', '//', '&&', '||', '!=', '#', '*', '@', '$', '%', '&', '=', '+', '-', '/', '\\'];

for (let i = 0; i < 25; i++) {
    const simbolo = document.createElement('div');
    simbolo.classList.add('simbolo');
    simbolo.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    
    // Posición aleatoria
    simbolo.style.left = Math.random() * 100 + 'vw';
    
    // Retraso aleatorio
    simbolo.style.animationDelay = Math.random() * 20 + 's';
    
    // Tamaño aleatorio
    const size = Math.random() * 10 + 20;
    simbolo.style.fontSize = size + 'px';
    
    // Opacidad aleatoria
    const opacity = Math.random() * 0.05 + 0.05;
    simbolo.style.color = `rgba(180, 180, 180, ${opacity})`;
    
    // Velocidad aleatoria
    const duration = Math.random() * 10 + 20;
    simbolo.style.animationDuration = duration + 's';
    
    fondo.appendChild(simbolo);
}

// Efecto de escritura para el título
const titulo = "Analista y Desarrollador De Software";
const elemento = document.querySelector('.titulo-profesional');

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        elemento.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

// Iniciar efecto de escritura cuando la página cargue
window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        typeWriter(titulo, 0, function() {
            // Callback después de terminar
        });
    }, 1000);
});

const canvas = document.getElementById("codeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = "{}[]();<>+-*/=";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height;
}

function draw() {
    ctx.fillStyle = "rgba(26, 26, 26, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#555555";
    ctx.font = fontSize + "px monospace";

for (let i = 0; i < drops.length; i++) {
    const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
    ctx.fillText(text, i * fontSize, drops[i]);
    drops[i] += fontSize * 0.3;
    if (drops[i] > canvas.height) drops[i] = 0;
    }
}

setInterval(draw, 60);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function createRipple(event) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    document.body.appendChild(ripple);

let x, y;
if(event.touches) {
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
} else {
    x = event.clientX;
    y = event.clientY;
}

    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';

    ripple.addEventListener('animationend', () => {
    ripple.remove();
});
}

document.addEventListener('click', createRipple);
document.addEventListener('touchstart', createRipple);