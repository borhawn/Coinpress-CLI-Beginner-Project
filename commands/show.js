// This command is fairly simple, we receive the user's input and search how many coins and in what currency we want the data in
// Moreover, I made another function in controller's folder to change the color and the format of the currencies and the data we see in console
// To ensure it is visually appealing and also easier to read.

const axios = require('axios');
const Currency = require('./controller/currency-controller').Currency;
const Format = require('./controller/currency-controller').Format;
const Color = require('./controller/color-controller');
const showFormat = require('./controller/show-list-output-handler').showFormat;

const show = {
    async list(cmd){

        try {

            let res = await axios.get(`
                https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cmd.cur}&order=market_cap_desc&per_page=${cmd.number}
                `);
            
                Currency(cmd.cur);

                let output = `\n`;

                for (let i = 0; i < res.data.length; i++) {
                    let coin = res.data[i];

                    output += showFormat(coin, i)
                        
                    }
                
                console.log(output) ;

        } catch (err) {

            console.log(err);

        }
    }

};

module.exports = show;