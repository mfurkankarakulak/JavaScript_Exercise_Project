function Storage(){

}

Storage.prototype.addFilmtoStorage =  function(newFilm){

    let films = this.getFilmtoStorage();

    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films));
    

}

Storage.prototype.getFilmtoStorage =  function(){

    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
       
    }

    return films;
}
Storage.prototype.deleteFilmtoStorage = function(filmTitle){

     let films = this.getFilmtoStorage();

     films.array.forEach(function(film,index){
         
         if(film.title === filmTitle){
             films.splice(index,1);
         }

     });

     localStorage.setItem("films",JSON.stringify(films));
}