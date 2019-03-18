const form  = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody2 = document.querySelectorAll(".card-body")[1];
const clearAllFilmButtton = document.querySelector("#clear-films");

const ui = new UI();
const storage = new Storage();



EventListener();

function EventListener(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmtoStorage();

        ui.loadAllFilms(films);

    });

    clearAllFilmButtton.addEventListener("click",deleteAllStorage);
    cardBody2.addEventListener("click",deleteFilm);
}
function deleteAllStorage(e){
   
    if(confirm("Emin misiniz ?")){
    storage.deleteAllFilmtoStorage();
    ui.deleteAllFilmtoUI();
   }
    else{
        ui.displayMessage("Silme işlemi iptal edildi.","success");
    }
}
function deleteFilm(e){
   if(e.target.id === "delete-film"){

        ui.deleteFilmtoUI(e.target);
        storage.deleteFilmtoStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Silme işlemi başarılı","success");
    }
   
    
}

function addFilm(e){

    const title =  titleElement.value;
    const director = directorElement.value;
    const url =  urlElement.value;

    if(title ==="" ||director === ""||url === ""){

       ui.displayMessage("Lütfen tüm alanları doldurunuz !!" ,"danger");
    }
    else{

        const newFilm = new Film(title,director,url);

        ui.addFilmtoUI(newFilm);
        storage.addFilmtoStorage(newFilm);
        ui.displayMessage("Film Başarıyla Eklendi.","success");
       
    }

    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}