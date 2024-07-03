const { Command } = require('commander');
const show = require('../commands/show');
const program = new Command();

program
.command('show')
.description('Top n-th coins of the market')
.option(
    '--number <number>',
    'Mention how many coins data you want to see',
    '10'
  )
  .option(
    '--cur <currency>',
    'In what currency do you want to see the data',
    'USD'
  )
  .action((cmd)=>show.list(cmd))

program.parse(process.argv)