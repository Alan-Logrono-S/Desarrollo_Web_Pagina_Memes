// Funciones para la Obtención de lo Requerido
const obtenerMemes = async () => {

    const memesContainers = document.getElementById('list-memes');
    const memeTemplate = document.getElementById('meme'); 

    const request = await fetch("https://api.imgflip.com/get_memes"); 

    const respuesta = await request.json();

    console.log (respuesta.data.memes[0]);

   respuesta.data.memes.slice(0, 8).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img');
        img.src = meme.url; 
        memesContainers.appendChild(newMemeCard);
    });

    memeTemplate.remove();

}

obtenerMemes()

// Estas 2 variables sirven para:
// list-memes = contenedor.
// meme = imagen del meme.

// fetch() === esto es una funcion u metodfo que me permite hacer llamadas para una API, de forma nativa.
// otra para hacer esto es (axios) para integrar a una libreria.
    // es necesario saber si es API publica o privada, entonces

// async y await === se ejecuta la API sin necesidad de esperar
