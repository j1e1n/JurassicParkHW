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


Park.prototype.findDinosaurBySpecies = function(species){
    let found = [];
    for (dinosaur of this.dinosaurs){
        if(dinosaur.species === species){
            found.push(dinosaur);
        }
    }
    return found
};


Park.prototype.totalVisitorsPerDay = function(){
    let total = 0;
    for(dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
};


Park.prototype.totalVisitorsPerYear = function(){
    let total = this.totalVisitorsPerDay() * 365;
    return total;
};


Park.prototype.totalRevenuePerYear = function(){
    let total = this.totalVisitorsPerYear() * this.ticketPrice;
    return total;
};

module.exports = Park;