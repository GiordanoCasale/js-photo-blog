
let data = [];
//vado a recuperare gli elementi dal dom
const cards = document.getElementById("card")
const btn = document.getElementById("btn-zoom")
const card = document.getElementById("cards")
const overlay = document.getElementById("overlay")
const overlayImage = document.getElementById("img-overlay")


//vado a richiamare l'endpoint
const endPoint = `https://lanciweb.github.io/demo/api/pictures/`
//vado a creare la funzione per sostituire le scritte e le foto
const createCards = (data) => {
    const newCards = `<div class="col-12 col-md-6 col-lg-4">
                    <div class="card-image bg-light m-5 d-flex justify-content-center flex-direction-column">
                        <div class="card-content mt-4 bg-danger">
                            <img src=${data.url} alt="" class="img-fluid" data-url = ${data.url}>
                            <h5 class="card-title pt-4">${data.title}</h5>
                            <p class="date">${data.date}</p>
                        </div>
                        <img class="pin" src="./img/pin.svg" alt="">
                    </div>
                </div>`

    cards.innerHTML += newCards;
}
//chiamata axios per recuperare i dati
const dati = () => {
    axios.get(endPoint).then(response => {
        response.data.forEach(item => createCards(item))
        //aggiungo eventlistener per far vedere le card
        const showCards = document.querySelectorAll(".img-fluid");
        showCards.forEach(img => {
            img.addEventListener("click", function () {
                overlayImage.src = this.getAttribute("data-url");
                overlay.classList.remove("d-none");

            })
        })

        //vado a mettere il bottone per la chiusura dell'overlay
        btn.addEventListener("click", function () {
            overlay.classList.add("d-none")
        })


    });



};

//vado a richiamare la funzione
dati();




























