// This function receives an input and a color and turns it into a string and returns it in the specified color

const colors = require('colors');

function Color(t, c){

    const stringText = t.toString();


    switch (c) {
        
            case "black":

            return stringText.black;
            
            break;
            
            case "red":

            return stringText.red;
            
            break;

            case "green":

            return stringText.green;
            
            break;

            case "yellow":

            return stringText.yellow;
            
            break;

            case "blue":

            return stringText.blue;
            
            break;

            case "magenta":

            return stringText.magenta;
            
            break;

            case "cyan":

            return stringText.cyan;
            
            break;

            case "white":

            return stringText.white;
            
            break;

            case "gray":

            return stringText.gray;
            
            break;

            case "grey":

            return stringText.grey;
            
            break;
            
        default:

            return stringText.white;

            break;
    }

}



module.exports = Color;











