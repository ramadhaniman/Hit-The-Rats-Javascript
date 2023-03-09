const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor')


let tanahSebelumnya;
let selesai;
let skor;

// function untuk menentukan tanah mana yang akan memunculkan tikus secara random
function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];

    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

// function untuk membuat durasi min dan max munculnya tikus secara acak
function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// function untuk memunculkan tikus, durasi munculnya tikus & menghilangkan tikus
function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(800, 1300);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanTikus();
        }
        
    }, wRandom);
}

// function untuk menentukan durasi permainan
function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanTikus();
    setTimeout(() => {
        selesai = true;
    }, 8000);
}

// function untuk menghitung pukulan yang masuk
function pukul() {
    skor++;
    papanSkor.textContent = skor;
    this.parentNode.classList.remove('muncul');
}

// function untuk merubah kursor menjadi alat pukul tikus
tikus.forEach(t => {
    t.addEventListener('click', pukul);
});