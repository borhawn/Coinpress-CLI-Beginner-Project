// There are two functions here. The first one changes the currency and how numbers are presented in that currency.
// The second one changes the format of the price, representing it in the correct format and decimals. 
// (! If you want to use this in real world applications you have to change the number of decimals and how it displays cause some of these coins have a lot of decimals)

let formatter;


exports.Currency = (curr) => {

    formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curr
    })


}

exports.Format = (number)=>{

    return formatter.format(number)

}
;
