class FilmLibrary {
    constructor() {
        this.library = [];
    }

    addFilm(film){
        this.library.add(film);
    }

    getHtmlTable(){
        toReturn = "<table> <tr>" +
            "<th>Title</th><th>Duration (min)</th><th>Budget (million)</th>"+"</tr>";

        for (let i=0; i<this.library.length; i++){
            toReturn="<tr>" +
                +"<th onload='this.library[i].getTitle()'></th>"
                +"<th onload='this.library[i].getDuration()'></th>"
                +"<th onload='this.library[i].getBudget()'></th>"
                +"</tr>"
        }


        return toReturn;
    }

}