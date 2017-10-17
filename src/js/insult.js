/* This module makes AJAX request to generate insult */

var ajax = require('ajax');

// Making module into an object so other modules (app.js) can import it via require("insult") command
var insult = {
  
  // generates insult of a given type (i_iInsultType) and passes it to callback function (i_fCallBackFunction)
  generateInsult: function(i_iInsultType, i_fCallBackFunction) {
    
    
      switch (i_iInsultType) {
        case 0:
        case 1:
        case 2:
        case 3:
            // Make request to autoinsults.com
            ajax(
              {
                url:'http://autoinsult.datahamster.com/scripts/webinsult.server.php?xajax=generate_insult&xajaxargs[]=' + i_iInsultType,
              },
              
              // on success parsing XML string and passing it to callback function
              function(data) {
                data = data.substring(data.indexOf('[CDATA[') + 7);
                data = data.substring(0, data.indexOf(']]'));
                i_fCallBackFunction(data);
              },
              
              // on error passing error message to callback function
              function(error) {
                i_fCallBackFunction('Insult failed: ' + error);
              }
            );
            break;
        case 4:
            // Make request to whatdoestrumpthink.com
            ajax(
              {
                url:'https://api.whatdoestrumpthink.com/api/v1/quotes/random' ,
              },
              
              // on success parsing JSON string and passing it to callback function
              function(data) {
                data = JSON.parse(data).message;
                i_fCallBackFunction(data);
              },
              
              // on error passing error message to callback function
              function(error) {
                i_fCallBackFunction('Insult failed: ' + error);
              }
            );
            break;
          
      }
    
    

        
        }
      };
  
this.exports = insult;



