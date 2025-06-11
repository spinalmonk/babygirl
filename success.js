// Konfetti indítása betöltéskor
window.addEventListener('load', () => {
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
    });

    // 🎶 Ha kell, újraindítjuk a zenét, ha autoplay blokkolva van
    const audio = document.getElementById('successAudio');
    audio.play().catch(() => {
        // Ha böngésző blokkolja, figyelmeztetést is tehetsz ide
        console.log("Autoplay blokkolva – felhasználói interakció szükséges.");
    });
});
