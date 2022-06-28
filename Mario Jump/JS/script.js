const mario = document.querySelector(".mario");
const cano = document.querySelector(".cano");

const pulo = () => {
    mario.classList.add("pulo");

    setTimeout(() => {
        mario.classList.remove("pulo");
    }, 500);
}

const loop = setInterval(() => {
    const canoPosicao = cano.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace("px", "");

    console.log(marioPosicao);

    if (canoPosicao <= 55 && canoPosicao > 0 && marioPosicao < 80) {
        cano.style.animation = "none";
        cano.style.left = `${canoPosicao}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosicao}px`;

        mario.src = "./Css/Imagens/game-over.png";

        clearInterval(loop);
    }

}, 10);

document.addEventListener("keydown", pulo);
