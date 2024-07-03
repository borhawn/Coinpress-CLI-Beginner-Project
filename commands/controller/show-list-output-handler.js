// This function gets data from list API and returns the correctly formatted output several times.
const Format = require('./currency-controller').Format;
const Color = require('./color-controller');

exports.showFormat = (coin, index) => {

    // This part looks chaotic and complicated but what it does is first of all it returns a string of this index (iteration) coin and then
    // it colors them and puts them in a clean way so it looks nicer to the user, and in the last part it checks whether the price change is
    // positive or negative and based on that changes the color of the last part.
    
    return Color(index+1+") ",'cyan') + Color(coin.name, "yellow") + " (" + Color(coin.symbol.toUpperCase(), "red") + ")" + " ==== " + Color("Price", "cyan")+ ' : ' + Color(Format(coin.current_price), "green") + ' === ' + Color("24h Change", "cyan") + ' : ' + (Number(coin.price_change_24h) >= 0 ? Color(Format(coin.price_change_24h) + ' ↑', "green")  : Color(Format(coin.price_change_24h) + ' ↓', "red") ) + '\n';

}
