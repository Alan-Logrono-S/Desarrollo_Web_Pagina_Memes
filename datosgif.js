const obtenerGifts = async () => {

    const request = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=vegeta");

    const respuesta = await request.json();

    const gifUrl = respuesta.data[0,8].images.original.url;
    const img = document.querySelector("#gif img");
    img.src = gifUrl;
    

 // 2da solucion: listado 10 gifts

    /*
    
    const gifContainers = document.getElementById('gifs');
    const gifTemplate = document.getElementById('gif'); 
    
    
    console.log (respuesta.data[0]);

   respuesta.data.slice(0, 8).forEach(gif => {
        const newGifCard = gifTemplate.cloneNode(true);
        const img = newGifCard.querySelector('img');
        img.src = gif.images.original.url; 
        gifContainers.appendChild(newGifCard);
    });
    gifTemplate.remove();
    */
}

obtenerGifts();
