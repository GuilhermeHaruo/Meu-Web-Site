// 1. DADOS DOS PROJETOS
const projects = [
    {
    title: "Álgebra Linear com Python",
    desc: "Scripts para cálculos de álgebra linear, matrizes e vetores utilizando Python básico e bibliotecas de manipulação de dados.",
    tech: "Python, Matemática Computacional",
    link: "https://github.com/GuilhermeHaruo/Algoritmos-python-b-sico./tree/main/03-%C3%81lgebra%20linear%20com%20python"
},
    {
    title: "Docência: Programação Infantil",
    desc: "Projeto de extensão no IFSP focado no ensino de pensamento computacional e lógica de programação para crianças.",
    tech: "Educação Tecnológica / Soft Skills",
    link: "https://github.com/GuilhermeHaruo/SI-IFSP-Works/tree/main/07-Projeto%20de%20extens%C3%A3o"
},
    {
    title: "Computação Gráfica 3D",
    desc: "Desenvolvimento de motores gráficos simples e renderização de objetos utilizando C++ e a biblioteca OpenGL.",
    tech: "C++, OpenGL, Álgebra Linear",
    link: "https://github.com/GuilhermeHaruo/Computa-o-gr-fica"
}
];

// 2. RENDERIZAÇÃO DOS PROJETOS
const container = document.getElementById('project-container');
projects.forEach(proj => {
    container.innerHTML += `
        <div class="card">
            <h3>${proj.title}</h3>
            <p style="color: var(--text-secondary); margin: 10px 0;">${proj.desc}</p>
            <p><small><code style="color: var(--cyan-tech)">${proj.tech}</code></small></p>
            <a href="${proj.link}" style="color: var(--cyan-tech); text-decoration:none; display:inline-block; margin-top:15px;">Ver código →</a>
        </div>
    `;
});

// 3. DARK / LIGHT MODE
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// 4. ANIMAÇÃO AO ROLAR (SCROLL REVEAL)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

// Função para ativar visibilidade (chamada pelo Observer)
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

const modal = document.getElementById("modalCertificado");
const imgModal = document.getElementById("imgExpandida");
const imagens = document.querySelectorAll(".img-cert");
const spanFechar = document.querySelector(".fechar-modal");

// Abrir modal ao clicar na imagem
imagens.forEach(img => {
    img.onclick = function() {
        modal.style.display = "flex";
        imgModal.src = this.src;
    }
});

// Fechar ao clicar no X ou no fundo escuro
modal.onclick = function() { modal.style.display = "none"; }

// O COMANDO ESC (Agora vai!)
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});