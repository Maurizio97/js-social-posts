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
        "image" : "",
        "likesNumber" : 80
    },
    {
        "nameAuthor" : "Michele manco",
        "imgProfile" : "https://unsplash.it/300/300?image=15",
        "date" : "1 mesi fa",
        "textPost" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "image" : "",
        "likesNumber" : 10
    },
    {
        "nameAuthor" : "salvatore ",
        "imgProfile" : "https://unsplash.it/300/300?image=15",
        "date" : "5 mesi fa",
        "textPost" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "image" : "",
        "likesNumber" : 1000
    }
];





// funzioni utili
function createPost(params) {
    
}