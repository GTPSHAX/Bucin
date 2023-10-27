const now = new Date();
const currentHour = now.getHours();
let waktu = "";
if (currentHour >= 0 && currentHour < 12) {
  waktu = "pagi";
} else if (currentHour >= 12 && currentHour < 17) {
  waktu = "siang";
} else if (currentHour >= 17 && currentHour < 20) {
  waktu = "sore";
} else {
  waktu = "malam";
}
const tempatPesan = document.querySelector("#pesan")
const tempatBtn = document.querySelector("#btn")
const tempatFoto = document.getElementById("foto")
const tempatInput = document.getElementById("input")
let valueNama
let pesan = [
    [`Hey Maniezzzz, selamat ${waktu}`,`${waktu} juga beb`],
    [`Aku punya pantun buat kamu`,`Apa tuh?`],
    [`Di bawah bintang gemilang bersinar,
    Namamu yang cantik, boleh ku tahu, sayang?`, `Itu Namaku`],
    [`Hai nyonya ${valueNama} yang cantik nan manis`,`Hai juga`],
    [`Kamu bagaikan bulan yang menyinari kegelapan yang ada di hatiku`,`Mang eyak`],
    [`Aku ada satu pertanyaan buat kamu`, `Apa beb?`],
    [`Apa bedanya kamu dengan CSS?`,`Gak tau aku beb`],
    [`Bedanya adalah kalo CSS mewarnai website ini kalo Kamu mewarnai hatiku`,`Ieisidjak`],
    [`Maaf gombalanku gak berkelas, soalnya aku orangnya setia bukan omong doang`,`Iya sayang`],
    [`Hai ${valueNama}`,`You too`],
    ["Yah sudah habis", "hihihi"]
]
let inituh = 0
let tanda = 0
tempatPesan.textContent = pesan[0][0]
tempatBtn.textContent = pesan[0][1]
tempatBtn.addEventListener("click",function(){
    valueNama = tempatInput.value
    tanda++
    pesan[3][0] = `Hai nyonya ${valueNama} yang cantik nan manis`
    pesan[9][0] = `${valueNama}, i love you so much`
    tempatPesan.textContent = pesan[tanda][0]
    tempatBtn.textContent = pesan[tanda][1]
    tempatFoto.src = `./assets/${tanda}.jpg`
    if (tanda == 2) {
      tempatInput.classList.add("muncul")
      inituh = 1
    } else {
      tempatInput.classList.remove("muncul")
    }
})