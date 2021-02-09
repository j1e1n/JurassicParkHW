const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  
  beforeEach(function () {
    park = new Park('Jurassic Park', 50);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    let dino1 = new Dinosaur('T-Rex', 'carnivore', 100);
    let dino2 = new Dinosaur('Stegosaurus', 'herbivore', 85);
    let dino3 = new Dinosaur('Triceratops', 'omnivore', 74);
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    let dino1 = new Dinosaur('T-Rex', 'carnivore', 100);
    let dino2 = new Dinosaur('Stegosaurus', 'herbivore', 85);
    let dino3 = new Dinosaur('Triceratops', 'omnivore', 74);
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.removeDinosaur(dino3);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);

  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    let dino1 = new Dinosaur('T-Rex', 'carnivore', 100);
    let dino2 = new Dinosaur('Stegosaurus', 'herbivore', 85);
    let dino3 = new Dinosaur('Triceratops', 'omnivore', 74);
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.mostVisitors();
    const actual = park.mostVisitors();
    assert.strictEqual(actual, dino1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    let dino1 = new Dinosaur('T-Rex', 'carnivore', 100);
    let dino2 = new Dinosaur('Stegosaurus', 'herbivore', 85);
    let dino3 = new Dinosaur('Triceratops', 'omnivore', 74);
    let dino4 = new Dinosaur('Stegosaurus', 'herbivore', 89)
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.findDinosaurBySpecies('Stegosaurus');
    const actual = park.findDinosaurBySpecies('Stegosaurus').length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    let dino1 = new Dinosaur('T-Rex', 'carnivore', 100);
    let dino2 = new Dinosaur('Stegosaurus', 'herbivore', 85);
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.totalVisitorsPerDay();
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 185);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    let dino1 = new Dinosaur('T-Rex', 'carnivore', 100);
    let dino2 = new Dinosaur('Stegosaurus', 'herbivore', 85);
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.totalVisitorsPerYear();
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 67525);
  });

  it('should be able to calculate total revenue for one year', function(){
    let dino1 = new Dinosaur('T-Rex', 'carnivore', 100);
    let dino2 = new Dinosaur('Stegosaurus', 'herbivore', 85);
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.totalRevenuePerYear();
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 3376250)
  });

});
