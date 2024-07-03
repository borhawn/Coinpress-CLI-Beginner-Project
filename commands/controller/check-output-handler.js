// This function gets an input and a currency and returns a correctly formatted output for check command
// It also checks to see whether the data is correct in currency.
// It is made to avoid visual clutter
// Further details and information can be added to the output if you check the API and see the results.
const Format = require('./currency-controller').Format;
const Color = require('./color-controller');

exports.checkFormat = (coin, cur) => {

     // I made seperate variables just to avoid chaining commands like these in the output section. (You can see the API for complete data and information)
     const coinCurrentPrice = coin.market_data.current_price[cur.toLowerCase()];
     const coinPriceChange = coin.market_data.price_change_24h_in_currency[cur.toLowerCase()];

     
     if(coinCurrentPrice && coinPriceChange){

         // I know this is a rookie way of handling data but it's too insignificant to handle with another function!
        // Output Here!!!

         return `\n` + Color("Name: ", "cyan") + Color(coin.name, "yellow") + ' ' + Color('(' + coin.symbol.toUpperCase() + ')', "red") + '\n' + Color("Price: ", "cyan") + Color(Format(coinCurrentPrice), "green") + '\n' + Color("24h Price Change: ", "cyan") + (Number(coinPriceChange) >= 0 ? Color(Format(coinPriceChange) + ' ↑', "green")  : Color(Format(coinPriceChange) + ' ↓', "red") );


     }else{
        // Error in case the currency doesn't exist in the returned object from API
         return Color('The currency you entered does not exist in database','red')

     }


}
