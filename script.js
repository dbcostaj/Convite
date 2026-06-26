function iniciarTudo() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('convite').style.display = 'block';
    
    const musica = new Audio('um-eco-no-tempo.mp3');
    musica.loop = true;
    musica.play();
    
    setTimeout(revelarTexto, 10000);
}

function revelarTexto() {
    const urlParams = new URLSearchParams(window.location.search);
    const tipo = urlParams.get('tipo');
    const nome = urlParams.get('nome') || "Convidado(a)";
    
    const textoFinal = (tipo === 'casal') ? "Aceitam ser nossos Padrinhos?" : "Aceita ser nosso Padrinho/Madrinha?";
    document.getElementById('mensagem-personalizada').innerText = `${nome}, você é especial para nós.`;
    
    const el = document.getElementById('pergunta-convite');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#";
    let iter = 0;
    const velocidade = 30000 / textoFinal.length;
    
    const intv = setInterval(() => {
        el.innerText = textoFinal.split("").map((l, i) => i < iter ? textoFinal[i] : chars[Math.floor(Math.random()*chars.length)]).join("");
        if (iter >= textoFinal.length) clearInterval(intv);
        iter++;
    }, velocidade);
}

function confirmarPresenca() {
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particula';
        p.innerText = '🌸';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 5000);
    }
    setTimeout(() => {
        window.location.href = "https://wa.me/55SEUNUMERO";
    }, 2000);
}