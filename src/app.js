/* Main app module */

var UI = require('ui');
var Insult = require('insult');

var iInsultType;

// main insult card to display insults
var insultCard = new UI.Card({
  title: 'Insult',
  /* action: {
    select: 'images/refresh.png',
    backgroundColor: 'white'
  }, */
  scrollable: true
});

// on clicking "select" on the card regenerate the insult  
insultCard.on('click', function(e) {
  if (e.button == 'select') {
    insultCard.body('Please wait to be insulted...');
    Insult.generateInsult(iInsultType, displayInsult);
  } 
});

// callback funtion that displays generated insult
function displayInsult(i_sInsultText){
   insultCard.body(i_sInsultText + '\n\n([select] for new)');
}


// creating selection menu
var typeMenu = new UI.Menu({
  sections: [{
    title: 'Select insult style',
    items:[
      {title:'Arabian'},
      {title:'Shakespearean'},      
      {title:'Mediterranean'},      
      {title:'Modern'}      
    ]
  }]
});

// on clicking "select" on menu generate the insult  
typeMenu.on('select', function(e) {
  iInsultType = e.itemIndex;
  insultCard.body('Please wait to be insulted...');
  insultCard.show();  
  Insult.generateInsult(iInsultType, displayInsult);
});

typeMenu.show();
