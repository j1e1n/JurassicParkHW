const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}


Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
            const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
            this.dinosaurs.splice(indexOfDinosaur, 1);
};


Park.prototype.mostVisitors = function(){
    let mostVisited = this.dinosaurs[0];
    for(dinosaur of this.dinosaurs){
        if(dinosaur.guestsAttractedPerDay > mostVisited.guestsAttractedPerDay){
            mostVisited = dinosaur;
        }
    } 
    return mostVisited;
};


module.exports = Park;