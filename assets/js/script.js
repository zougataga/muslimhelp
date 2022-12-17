const preload = document.querySelector(".preload");

window.onload = () => {
    stopLoading();


    const game = $('.game').blockrain({
        speed: 20,
        theme: 'retro',
        onStart: function () {
        },
        onLine: function () {
        },
        onGameOver: function (score) {
        }
    });

    const select = document.querySelector(".theme select");
    select.addEventListener("change", async (ev) => {
        const mode = ev.target.value;
        game.blockrain('theme', mode);
    })

}

function loading() {
    preload.style.display = "block";
    preload.style.opacity = "1";
}
function stopLoading() {
    preload.style.opacity = "0";
    setTimeout(() => {
        preload.style.display = "none";
    }, 120);
}
