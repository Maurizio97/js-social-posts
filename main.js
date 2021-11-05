// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.


// creo un array di oggetti
// creo una funzione che mi permetta di stampare i post in pagina
// ricavo le proprietà di ogni oggetto 
    // utilizzo la funzione sostituendo gli argomenti con i valori degli oggetti
        // se la chiave ha "image" : "" stampo il post senza img



const postInfoDatabase = [
    {
        "nameAuthor" : "Maurizio Proietto",
        "imgProfile" : "https://unsplash.it/300/300?image=15",
        "date" : "4 mesi fa",
        "textPost" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "image" : "https://unsplash.it/600/300?image=171",
        "likesNumber" : 80
    },
    {
        "nameAuthor" : "Michele manco",
        "imgProfile" : "https://unsplash.it/300/300?image=15",
        "date" : "1 mesi fa",
        "textPost" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "image" : "https://unsplash.it/600/300?image=171",
        "likesNumber" : 10
    },
    {
        "nameAuthor" : "Simone Icardi ",
        "imgProfile" : "https://unsplash.it/300/300?image=15",
        "date" : "5 mesi fa",
        "textPost" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "image" : "",
        "likesNumber" : 1000
    }
];

console.log(postInfoDatabase);
const contPost = document.querySelector("#container");
for (let i = 0; i < postInfoDatabase.length; i++){
    let {nameAuthor, imgProfile, date, textPost, image, likesNumber} = postInfoDatabase[i];
    console.log(postInfoDatabase[i]);
    createPost(nameAuthor, imgProfile, date, textPost, image, likesNumber);
}

// funzioni utili
function createPost(nameAuthor, imgProfile, date, textPost, image, likesNumber) {
    contPost.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${imgProfile}" alt="${nameAuthor}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${nameAuthor}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${textPost}</div>
            <div class="post__image">
                <img src="${image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace </span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likesNumber}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
}