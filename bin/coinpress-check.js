const { Command } = require('commander');
const check = require('../commands/check');
const program = new Command();

program
.command('coin')
.description('Checks for a certain crypto coin')
.option(
    '--name <name>',
    'The name of the coin you want to check',
    'btc'
  )
  .option(
    '--cur <currency>',
    'In what currency do you want to see the data',
    'USD'
  )
  .action((cmd)=>check.coin(cmd))

program.parse(process.argv)