var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
dinosaur = 'Triceatops';

//uppercase
var upperCase = text.toUpperCase();

console.log(upperCase); 

// change of dinasaur species names

var changedText = text.replace('Velociraptor', 'Triceatops');

console.log( changedText ); 

//length of the text in words

var halfTextNo = changedText.length/2;

console.log (halfTextNo);

var halfText= changedText.slice(0, halfTextNo);

console.log(halfText);
