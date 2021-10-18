class Film {

    constructor(title, duration, budget, link) {
        this.title = title;
        this.duration = duration;
        this.budget = budget;
        this.link = link;
    }

    getTitle(){
        return this.title;
    }

    getDuration(){
        return this.duration;
    }

    getBudget(){
        return this.budget;
    }

    getLink(){
        return this.link;
    }

    toString(){
        return "Title : " + this.title + "\nDuration : "+this.duration+"\nBudget : "+this.budget+"\n";
    }
}