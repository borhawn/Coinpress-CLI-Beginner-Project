// Here we send the name that the user entered to an api that searches with that query and we return the very first result that shows up in the coins section
// We do this to ensure whatever user enters (even incomplete or wrong) results in what the user intended to find !
// Then we enter the ID of that coin in another API which will return the data related to that coin including price in different currencies and name and etc.


const axios = require('axios');
const Currency = require('./controller/currency-controller').Currency;
const Color = require('./controller/color-controller');
const checkFormat = require('./controller/check-output-handler').checkFormat;


const check = {
    async coin(cmd){

        try {

            let res = await axios.get(`
                https://api.coingecko.com/api/v3/search?query=${cmd.name}
                `);
            
                Currency(cmd.cur);

                let coinID = res.data.coins[0].id;

                if(coinID != undefined && coinID != null){


                    let coinDataRaw = await axios.get(`
                        https://api.coingecko.com/api/v3/coins/${coinID}
                        `);

                        const coin = coinDataRaw.data;

                        console.log(

                            checkFormat(coin, cmd.cur)

                        );


                }else{

                    console.log(Color('Entered Coin Does Not Exist','red'))

                }               

        } catch (err) {

            console.log(err);

        }
    }

};

module.exports = check;