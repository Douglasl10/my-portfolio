
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5519989783977';

    const texto = `Olá Me chamo ${nome}, ${mensagem}.`;
    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

    window.open(url, '_blank');
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas para preencher a tela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Classe para as partículas
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1; // Tamanho aleatório
        this.speedX = Math.random() * 3 - 1.5; // Velocidade aleatória
        this.speedY = Math.random() * 3 - 1.5; // Velocidade aleatória
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Recria a partícula se sair da tela
        if (this.size <= 0) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
        }
    }

    draw() {
        ctx.fillStyle = '#0dc10a'; // Cor da partícula
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Cria partículas
function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }
}

// Animação
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate); // Chama a função de animação novamente
}

init();
animate();




