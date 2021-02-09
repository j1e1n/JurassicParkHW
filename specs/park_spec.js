const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  
  beforeEach(function () {
    park = new Park('Jurassic Park', 60);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 60);
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

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
