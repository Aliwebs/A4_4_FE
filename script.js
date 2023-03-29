async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    loadProducts(data)

    return data;
}

function loadProducts(data) {
    let target = document.getElementById("games");
    data.forEach(game => {

        let name = Object.getOwnPropertyNames(game)[0];
        game = game[name];
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.innerHTML = game.name;
        let img = document.createElement("img");
        img.src = game.img;
        div.appendChild(h2);
        div.appendChild(img);
        target.appendChild(div);
    })


}

function createProduct(data) {
    let name = Object.getOwnPropertyNames(data)[0];
    document.getElementById("name").innerHTML = "Name: " + data[name].name;
    document.getElementById("platform").innerHTML = "Platform: " + data[name].platform;
    document.getElementById("description").innerHTML = "Description: " + data[name].Description;
    let listOfSellers = document.getElementById("sellers");

    data[name].URL.forEach((element, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = element;
        a.innerHTML = element;
        const p = document.createElement('p');
        p.innerHTML = data[name].prices[index];
        li.appendChild(a)
        li.appendChild(p)
        listOfSellers.appendChild(li);
    });
}


fetchAsync("http://localhost:3000");


let currentSlide = 0;



// Next/previous controls
function moveSlide(n) {
    slideshow(currentSlide += n);
}

function slideshow(num) {
    const target = document.getElementById("image-container");
    const element = target.getElementsByTagName('img')[0];
    element.src = imgArray[currentSlide];
    console.log(currentSlide)
    if (num < 0) { currentSlide = imgArray.length - 1 }
    else if (num > imgArray.length - 1) { currentSlide = 0 }
    element.src = imgArray[currentSlide];

}

