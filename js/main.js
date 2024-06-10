// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// creo array con le immagini
const imageList = [
    "img/01.webp", 
    "img/02.webp", 
    "img/03.webp", 
    "img/04.webp", 
    "img/05.webp"
];

// seleziono dall'html l'elemento contenitore
const carousel = document.querySelector(".carousel");

// definisco in una variabile gli elementi della lista 
for (let i = 0; i < imageList.length; i++) {
    const image = imageList[i];
    console.log(image);
    
    // creo l'elemento da inserire nell'html 
    let item = `
            <div class="item">
                <img src="${image}" alt="image">
            </div>`;

    // inserisco l'elemento nell'html
    carousel.innerHTML += item;

}

// selezioto gli elementi della mia lista
let items = document.getElementsByClassName("item");

let activeItem = 0;

// aggiungo classe active all'elemento ativo
items[activeItem].classList.add("active");

// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// seleziono il bottone

const buttonNext = document.getElementById("next");

// gestisco l'interazione dell'utente al click 
buttonNext.addEventListener("click",
    function () {

        if (activeItem < imageList.length - 1) {
            // rimuovo la classe dal precedente
            items[activeItem].classList.remove("active");

            activeItem++;

            // aggiungo classe active all'elemento ativo
            items[activeItem].classList.add("active");

        }
    }

    
)

const buttonPrev = document.getElementById("prev");

// gestisco l'interazione dell'utente al click 
buttonPrev.addEventListener("click",
    function () {

        if (activeItem < imageList.length && activeItem > 0) {
            // rimuovo la classe dal precedente
            items[activeItem].classList.remove("active");

            activeItem--;

            // aggiungo classe active all'elemento ativo
            items[activeItem].classList.add("active");

        }
        
    }

)