document.addEventListener("DOMContentLoaded", start);

function start() {
    const searchBtn = document.getElementById("Search_button");
    searchBtn.addEventListener('click', search);
    function search() {
        window.open("file:///C:/Users/kasib/OneDrive/Desktop/A4_4_FE/catalogue.html");
    }
}

//add trending products to home page
//trello boards