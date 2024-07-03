# Coinpress Tutorial Express.js Project

As my first github share, I've made this cryptocurrency API based CLI which uses Coingecko's free API to get data about crypto coins and show them to the user in a user-friendly format. The data provided for the user is not complete and it's very basic so feel free to develop it further and add the details you want. You can also use parts of this code to show data in the front-end and visualize it for the user. I might do that myself in a seperate project.

## Setup

1. You have to have 'Node' installed on your device. You can use this link to install it.
   [Node JS](https://nodejs.org/en/download/package-manager)
   
2. Open up your console/terminal and go to the directory that you have the files and folders, enter this command so you can use coinpress command everywhere.
   ``npm link``
3. You might have to give some of the files permission in order to run coinpress. use chmod +x to do so if needed.
4. You are done! Now you can use coinpress everywhere on your terminal / console.

## Commands
1. coinpress list show
   By default, this commands returns a list of top 10 crypto coins in USD currency. It also accepts 2 options. Currency and Number. You can utilize the options like this :   
   ``coinpress list show --number 25 --cur EUR``    
   This will return top 25 coins in Euroes currency.
   ![image](https://github.com/borhawn/Coinpress-CLI-Beginner-Project/assets/117742903/e5b98b01-d178-43ca-a47c-5228567614bd)

   
3. coinpress check coin
   This command will lookup for the coin you specify and return it's data and price. By default it returns Bitcoin and in USD currency. Just like the other command it accepts 2 options. Currency and Name.    
   You can use the options like below :    
   ``coinpress check coin --name smooth love potion --cur aed``    
   This will return data for a coin called SLP ( smooth love potion ) in Dirhams currency ( AED )
   ![image](https://github.com/borhawn/Coinpress-CLI-Beginner-Project/assets/117742903/2dbb2f34-62c1-4b66-a449-9aa61d3b93d7)

