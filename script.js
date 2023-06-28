var listaNomes = ['Conheça','nossa','plataforma','...','hehehe','???','Você ai', 'no celular', 'Ruiva de franja', 'Gabi', ',', 'preciso saber'];

let myDiv = document.getElementById('coracao');
const audio = document.querySelector('audio')

var titulo = document.querySelector(".titulo");
i = 0
titulo.addEventListener("click", function(){

    titulo.textContent = listaNomes[i];
    i = i + 1
    if(i > listaNomes.length){
        audio.play()
        i = 0
        titulo.textContent = listaNomes[0]

        myDiv.classList.replace("hide", "container");

        titulo.classList.replace("titulo","hide");
    }
    console.log(i)
});